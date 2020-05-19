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

module.exports = router;
