const express = require("express");
const router = express.Router();
const {
  getPokemon,
  getPokemonTypeByName,
  getPokemonDescriptionByName,
  getPokemonWeightByName,
  getPokemonStatsByName,
  agregarPokemon,
  deletePokemonByName,
  putPokemonById,
  getPokemonById,
} = require("../controllers/pokemon");
const { verifyToken } = require("../middlewares/validate-jwt");

router.get("/pokemon", verifyToken, getPokemon);
router.get("/pokemon/:id", getPokemonById);
router.get("/pokemon/:nombre/tipo", getPokemonTypeByName);
router.get("/pokemon/:nombre/descripcion", getPokemonDescriptionByName);
router.get("/pokemon/:nombre/peso", getPokemonWeightByName);
router.get("/pokemon/:nombre/stats", getPokemonStatsByName);
router.post("/pokemon", agregarPokemon);
router.delete("/pokemon/:nombre", deletePokemonByName);
router.put("/pokemon/:id", putPokemonById);

module.exports = router;
