const express = require("express");
const router = express.Router();
const {
  getPokemon,
  getPokemonTypeById,
  getPokemonDescriptionById,
  getPokemonWeightById,
  getPokemonStatsById,
  agregarPokemon,
  deletePokemonById,
  putPokemonById,
  getPokemonById,
} = require("../controllers/pokemon");
const { verifyToken } = require("../middlewares/validate-jwt");

router.get("/pokemon", getPokemon);
router.get("/pokemon/:id", getPokemonById);
router.get("/pokemon/:id/tipo", getPokemonTypeById);
router.get("/pokemon/:id/descripcion", getPokemonDescriptionById);
router.get("/pokemon/:id/peso", getPokemonWeightById);
router.get("/pokemon/:id/stats", getPokemonStatsById);
router.post("/pokemon", agregarPokemon);
router.delete("/pokemon/:id", deletePokemonById);
router.put("/pokemon/:id", putPokemonById);

module.exports = router;
