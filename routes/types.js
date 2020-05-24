// Importation des modules
const express = require("express");
const router = express.Router();

/*
    Get routes
*/

router.get("/", async (req, res, next) => {
  res.render("type/index", {
    title: "Types",
    baseUrl: req.baseUrl,
  });
});

module.exports = router;
