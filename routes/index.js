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
    originalUrl: req.originalUrl,
    session: req.session,
    user: req.user,
  });
});

/*
  Register routes
*/

router.get("/register", (req, res, next) => {
  res.render("user/form", {
    title: "Inscription",
    isNew: true,
    panel: true,
    originalUrl: req.originalUrl,
    session: req.session,
    user: req.user,
  });
});

module.exports = router;
