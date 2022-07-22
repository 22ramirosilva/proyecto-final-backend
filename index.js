// const { Pool } = require("pg");
const express = require("express");
const pokemonRoutes = require("./routes/pokemon");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
// const fs = require("fs");
// const pokemones = require("./models/pokemones");

// fs.writeFileSync(
//     "./pokemones.js",
//     pokemones.map((pk) => JSON.stringify({
//         name: pk.name.english,
//         type: pk.type,
//         base: pk.base,
//         description: pk.description,
//         height: pk.profile.height,
//         weight: pk.profile.weight,
//         ability: pk.profile.ability.map((a) => a[0]),
//         image: pk.image.hires
//     })).toString()
// );

const authRouter = require("./routes/auth");

// const pool = new Pool({
//     user: "postgres",
//     database: "prueba",
//     password: "47853751"
// });

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", pokemonRoutes);
app.use("/", authRouter);

app.get("/", (req, res) => {
    res.send("hola");
});

// app.post(
//     '/comment',
//     body('email').isEmail().normalizeEmail(),
//     body('name').not().isEmpty().trim().escape(),
//     body('notifyOnReply').toBoolean(),
//     (req, res) => {
//         // Handle the request somehow
//     });

/*

app.get('/tareas', (req, res) => {
    res.send("tareas");
});

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon);
// });

app.get('/pokemon/grass', (req, res) => {
    const pokemonGrass = pokemon.filter((e) => (e.type.includes("Grass")))
    res.send(pokemonGrass.map((e) => e.name.english));
});

app.get('/pokemon/fire', (req, res) => {
    const pokemonFire = pokemon.filter((e) => (e.type.includes("Fire")))
    res.send(pokemonFire.map((e) => e.name.english));
});

app.get('/pokemon/:nombre', (req, res) => {
    const { nombre } = req.params;
    const unPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(unPokemon);
});

app.get('/pokemon/:nombre/tipo', (req, res) => {
    const { nombre } = req.params;
    const tipoPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(tipoPokemon.type);
});

app.get('/pokemon/:nombre/stats', (req, res) => {
    const { nombre } = req.params;
    const statsPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(statsPokemon.base);
});

app.get('/pokemon/:nombre/movimientos', (req, res) => {
    const { nombre } = req.params;
    const movimientosPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(movimientosPokemon.profile.ability);
});

app.get('/pokemon/:nombre/altura', (req, res) => {
    const { nombre } = req.params;
    const alturaPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(alturaPokemon.profile.height);
});

app.get('/pokemon/:nombre/peso', (req, res) => {
    const { nombre } = req.params;
    const pesoPokemon = pokemon.find((e) => (e.name.english.toLowerCase() === nombre));
    res.send(pesoPokemon.profile.weight);
});

*/

app.listen(1234, async () => {
    // await pool.connect();
    console.log("Server listening in http://localhost:1234");
});
