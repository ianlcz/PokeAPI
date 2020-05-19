// Importation des modules
const express = require("express");
const router = express.Router();

/*
    Get routes
*/

router.get("/", async (req, res, next) => {
  res.render("types/index", {
    title: "Types",
    baseUrl: req.baseUrl,
  });
});

module.exports = router;
