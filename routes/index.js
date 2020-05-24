// Importation des modules
const express = require("express");
const router = express.Router();

/*
  Index routes
*/

router.all("/*", (req, res, next) => {
  res.header("Developer", "Yann Le Coz (alias ianDev)");
  res.header("Developer-Url", "https://yannlecoz.fr");
  next();
});

router.get("/", async (req, res, next) => {
  res.render("index", {
    title: "Bienvenue",
    panel: true,
    originalUrl: req.originalUrl,
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
