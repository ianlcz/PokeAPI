// Importation des modules
const express = require("express");
const router = express.Router();

/*
  Index routes
*/

router.get("/", async (req, res, next) => {
  res.render("index", {
    title: "Bienvenue",
    panel: true,
  });
});

module.exports = router;
