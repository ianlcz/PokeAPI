// Importation des modules
const express = require("express");
const router = express.Router();

/*
  Get routes
*/

router.get("/", async (req, res, next) => {
  res.render("pokemons/index", {
    title: "Pokémons",
    baseUrl: req.baseUrl,
  });
});

router.get("/:idPokemon", async (req, res, next) => {
  res.render("pokemons/show", {
    title: "#" + 393 + " " + "Tiplouf",
    baseUrl: req.baseUrl,
  });
});

module.exports = router;
