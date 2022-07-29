// const pokemon = require("../models/pokemones");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "pokemones",
  password: "47853751",
});

exports.getPokemon = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT pokemones.*, array_agg(distinct types.type_name) as types, array_agg(distinct abilities.name) as abilities, json_agg(distinct base.*) as base FROM pokemones INNER JOIN types ON pokemones.id = types.pokemonid JOIN base  on pokemones.id = base.pokemon_id  JOIN abilities  on pokemones.id = abilities.pokemones_id WHERE pokemones.eliminado=false  group by pokemones.id, base.id order by pokemones.id; "
  );
  const pokemon = rows.map((r) => {
    const { hp, atk, def, satk, sdef, spd } = r.base[0];
    return { ...r, base: { hp, atk, def, satk, sdef, spd } };
  });

  res.send(pokemon);
};

exports.getPokemonById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    "SELECT pokemones.*, array_agg(distinct types.type_name) as types, array_agg(distinct abilities.name) as abilities, json_agg(  base ) as base FROM pokemones INNER JOIN types ON pokemones.id = types.pokemonid JOIN base on pokemones.id = base.pokemon_id  JOIN abilities  on pokemones.id = abilities.pokemones_id where pokemones.id = $1 and pokemones.eliminado=false group by pokemones.id, base.id order by pokemones.id; ",
    [id]
  );

  if (rows[0]) {
    const { rows: pokemones } = await pool.query(
      "SELECT id FROM pokemones where eliminado = false order by number"
    );
    const pokemonIndex = pokemones.findIndex((p) => id == p.id);
    const next = pokemones[pokemonIndex + 1]?.id;
    const prev = pokemones[pokemonIndex - 1]?.id;

    const pokemon = rows.map((r) => {
      const { hp, atk, def, satk, sdef, spd } = r.base[0];
      return { ...r, base: { hp, atk, def, satk, sdef, spd } };
    });

    res.send({ ...pokemon[0], next, prev });
  } else {
    res.sendStatus(404);
  }
};

exports.getPokemonTypeById = (req, res) => {
  const { id } = req.params;
  const tipoPokemon = pokemon.find((e) => e.id == id);
  res.send(tipoPokemon.type);
};

exports.getPokemonDescriptionById = (req, res) => {
  const { id } = req.params;
  const tipoPokemon = pokemon.find((e) => e.id == id);
  res.send(tipoPokemon.description);
};

exports.getPokemonWeightById = (req, res) => {
  const { id } = req.params;
  const tipoPokemon = pokemon.find((e) => e.id == id);
  res.send(tipoPokemon.profile.weight);
};

exports.getPokemonStatsById = (req, res) => {
  const { id } = req.params;
  const unPokemon = pokemon.find((e) => e.id == id);
  res.send(unPokemon.base);
};

exports.agregarPokemon = async (req, res) => {
  const {
    name,
    number,
    type,
    moves,
    HP,
    ATK,
    DEF,
    SATK,
    SDEF,
    SPD,
    description,
    height,
    weight,
    image,
  } = req.body;

  const { rows } = await pool.query(
    "INSERT INTO pokemones ( name, number, weight, height, image, description, eliminado) values ($1, $2, $3, $4, $5, $6, false) returning id",
    [name, number, weight, height, image, description]
  );
  const id = rows[0].id;
  await pool.query("INSERT INTO abilities (pokemones_id,name) values ($1,$2)", [
    id,
    moves,
  ]);
  await pool.query(
    "INSERT INTO base (pokemon_id, hp, atk, def, satk, sdef, spd) values ($1, $2, $3, $4, $5, $6, $7)",
    [id, HP, ATK, DEF, SATK, SDEF, SPD]
  );
  await pool.query("INSERT INTO types (pokemonid, type_name) values ($1, $2)", [
    id,
    type,
  ]);

  res.json({ id: id, mensaje: "el pokemon fue registrado correctamente" });
};

exports.deletePokemonById = async (req, res) => {
  const { id } = req.params;
  await pool.query("UPDATE pokemones SET eliminado=true WHERE id = $1", [id]);
  res.sendStatus(200);
};

exports.putPokemonById = (req, res) => {
  const { id } = req.params;
  const { name, type, height, weight } = req.query;
  const pokemonIndice = pokemon.findIndex((e) => e.id == id);

  if (name) {
    pokemon[pokemonIndice].name.english = name;
  }
  if (type) {
    pokemon[pokemonIndice].type = type;
  }
  if (height) {
    pokemon[pokemonIndice].profile.height = height;
  }
  if (weight) {
    pokemon[pokemonIndice].profile.weight = weight;
  }

  // {Object.key (pokemon.stats).map(
  //     ([nombreDeLaProp, valorDeLaProp]) => (
  //       <p style={{ color: pokemon.color }}>{nombreDeLaProp}</p>
  //     )
  //   )}

  res.send(pokemon[pokemonIndice]);
};
