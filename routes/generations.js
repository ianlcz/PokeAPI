// Importation des modules
const express = require("express");
const router = express.Router();

/*
    Get routes
*/

router.get("/", async (req, res, next) => {
  res.render("generation/index", {
    title: "Générations",
    baseUrl: req.baseUrl,
  });
});

module.exports = router;
