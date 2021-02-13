// Importation des modules
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Importation du modèle Pokemon
const Pokemon = require("../models/pokemon.model");

/*
  Get routes
*/
router.get("/", async (req, res) => {
  res.render("pokemon/index", {
    title: "Pokémons",
    baseUrl: req.baseUrl,
    pokemons: await Pokemon.find().sort({ nationalNumber: "asc" }),
  });
});

router.get("/:idPokemon", async (req, res) => {
  res.render("pokemon/show", {
    title: 791 + " - " + "Solgaleo",
    baseUrl: req.baseUrl,
  });
});

module.exports = router;
