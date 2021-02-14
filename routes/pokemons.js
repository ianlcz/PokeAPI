// Importation des modules
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const numeral = require("numeral");

// Importation du modèle Pokemon
const Pokemon = require("../models/pokemon.model");

// load a locale
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ",",
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
  },
  ordinal: (number) => (number === 1 ? "er" : "ème"),
  currency: {
    symbol: "€",
  },
});

// switch between locales
numeral.locale("fr");

/*
  Get routes
*/
router.get("/", async (req, res) => {
  const pokemons = await Pokemon.find().sort({ nationalNumber: "asc" });

  try {
    res.render("pokemon/index", {
      title: "Pokémons",
      baseUrl: req.baseUrl,
      pokemons,
    });
  } catch (err) {
    res.status(404).send({ message: "Pokemons not found !" });
  }
});

router.get("/:idPokemon", async (req, res) => {
  const pokemon = await Pokemon.findOne({
    nationalNumber: req.params.idPokemon,
  });

  try {
    res.render("pokemon/show", {
      title: pokemon.nationalNumber + " - " + pokemon.name.fr,
      baseUrl: req.baseUrl,
      pokemon,
      hundredExperienceYield: numeral(pokemon.hundredExperienceYield).format(
        "0,0"
      ),
    });
  } catch (err) {
    res.status(404).send({ message: "Pokemon not found !" });
  }
});

module.exports = router;
