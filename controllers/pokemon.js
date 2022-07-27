// const pokemon = require("../models/pokemones");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "pokemones",
  password: "47853751",
});

exports.getPokemon = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT pokemones.*, array_agg(distinct types.type_name) as types, array_agg(distinct abilities.name) as abilities, json_agg(distinct base.*) as base FROM pokemones INNER JOIN types ON pokemones.id = types.pokemonid JOIN base  on pokemones.id = base.pokemon_id  JOIN abilities  on pokemones.id = abilities.pokemones_id   group by pokemones.id, base.id order by pokemones.id; "
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
    "SELECT pokemones.*, array_agg(distinct types.type_name) as types, array_agg(distinct abilities.name) as abilities, json_agg(  base ) as base FROM pokemones INNER JOIN types ON pokemones.id = types.pokemonid JOIN base on pokemones.id = base.pokemon_id  JOIN abilities  on pokemones.id = abilities.pokemones_id where pokemones.id = $1  group by pokemones.id, base.id order by pokemones.id; ",
    [id]
  );
  const { rows: rowsNext } = await pool.query(
    "SELECT id FROM pokemones where id = $1 ",
    [1 + parseInt(id)]
  );
  const { rows: rowsPrev } = await pool.query(
    "SELECT id FROM pokemones where id = $1 ",
    [parseInt(id) - 1]
  );

  const next = rowsNext[0]?.id;
  const prev = rowsPrev[0]?.id;

  const pokemon = rows.map((r) => {
    const { hp, atk, def, satk, sdef, spd } = r.base[0];
    return { ...r, base: { hp, atk, def, satk, sdef, spd } };
  });

  res.send({ ...pokemon[0], next, prev });
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

exports.agregarPokemon = (req, res) => {
  const {
    name,
    id,
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

  pool.query(
    "INSERT INTO pokemones (id, name, weight, height, image, description) values ($1, $2, $3, $4, $5, $6)",
    [id, name, weight, height, image, description]
  );
  pool.query("INSERT INTO abilities (pokemones_id,name) values ($1,$2)", [
    id,
    moves,
  ]);
  pool.query(
    "INSERT INTO base (pokemon_id, hp, atk, def, satk, sdef, spd) values ($1, $2, $3, $4, $5, $6, $7)",
    [id, HP, ATK, DEF, SATK, SDEF, SPD]
  );
  pool.query("INSERT INTO types (pokemonid, type_name) values ($1, $2)", [
    id,
    type,
  ]);

  res.json({ id: id, mensaje: "el pokemon fue registrado correctamente" });
};

exports.deletePokemonByName = (req, res) => {
  const { nombre } = req.params;
  const listaPokemon = pokemon;
  const pokemonIndex = pokemon.findIndex(
    (p) => p.name.english.toLowerCase() === nombre.toLowerCase()
  );
  pokemon.splice(pokemonIndex, 1);
  res.send(listaPokemon);
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
