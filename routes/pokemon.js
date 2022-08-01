const express = require("express");
const router = express.Router();
const {
  getPokemon,
  agregarPokemon,
  deletePokemonById,
  getPokemonById,
} = require("../controllers/pokemon");
const { verifyToken } = require("../middlewares/validate-jwt");

router.get("/pokemon", getPokemon);
router.get("/pokemon/:id", getPokemonById);
router.post("/pokemon", agregarPokemon);
router.delete("/pokemon/:id", deletePokemonById);

module.exports = router;
