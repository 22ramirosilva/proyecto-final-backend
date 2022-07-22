const pokemon = require("../models/pokemones");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "movieacademy",
  password: "47853751",
});

exports.getPokemon = async (req, res) => {
  const { rows } = await pool.query("select * from public.categories");
  // const { type, minHP, minATK, minSATK, minSPD, id } = req.query;
  // let pokemonFiltrados = pokemon;
  // if (type) {
  //   pokemonFiltrados = pokemonFiltrados.filter((el) =>
  //     el.type.some((t) => t.toLowerCase() === type.toLowerCase())
  //   );
  // }
  // if (id) {
  //   pokemonFiltrados = pokemonFiltrados.find((el) => el.id == id);
  // }
  // if (minHP) {
  //   pokemonFiltrados = pokemonFiltrados.filter((el) => el.base.HP >= minHP);
  // }
  // if (minATK) {
  //   pokemonFiltrados = pokemonFiltrados.filter((el) => el.base.ATK >= minATK);
  // }
  // if (minSATK) {
  //   pokemonFiltrados = pokemonFiltrados.filter((el) => el.base.SATK >= minSATK);
  // }
  // if (minSPD) {
  //   pokemonFiltrados = pokemonFiltrados.filter((el) => el.base.SPD >= minSPD);
  // }
  res.send(pokemon);
  // res.send(rows);
};

exports.getPokemonById = (req, res) => {
  const { id } = req.params;
  const pokemonIndex = pokemon.findIndex((e) => e.id == id);

  const unPokemon = pokemon[pokemonIndex];
  const next =
    pokemonIndex !== pokemon.lenght - 1 ? pokemon[pokemonIndex + 1].id : null;
  const prev = pokemonIndex !== 0 ? pokemon[pokemonIndex - 1].id : null;

  res.send({ ...unPokemon, next, prev });
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
  const listaPokemon = pokemon;
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
  const pokemonAgregar = {
    name: { english: name },
    id: id,
    type: [type],
    base: { HP, ATK, DEF, SATK, SDEF, SPD },
    description: description,
    profile: { height, weight, ability: [moves] },
    image: { hires: image },
  };
  listaPokemon.push(pokemonAgregar);
  res.send(listaPokemon[listaPokemon.length - 1]);
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
