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

/*
  Login routes
*/

router.get("/login", (req, res, next) => {
  res.render("user/login", {
    title: "Connexion",
    panel: true,
    session: req.session,
    user: req.user,
  });
});

module.exports = router;
