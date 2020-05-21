// Importation des modules
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const favicon = require("serve-favicon");

// Instanciation du serveur
const app = express();

// Initialisation des routes
const publicRouter = require("./routes/index");
const pokemonRouter = require("./routes/pokemons");
const generationRouter = require("./routes/generations");
const typeRouter = require("./routes/types");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(favicon("./public/images/favicon.png"));
app.use(methodOverride("_method"));

console.log("\nStarting server on http://localhost:1996/\n");

/*  Public routes
    Such as /, /login, /register, /pokemons, /types, /generations
*/
app.use("/", publicRouter);
app.use("/pokemons", pokemonRouter);
app.use("/types", typeRouter);
app.use("/generations", generationRouter);

// Error's middlewares
app.use((req, res, next) => {
  res.status(404).format({
    html: () => {
      res.render("error", {
        status: 404,
        panel: true,
      });
    },
    json: () => {
      res.json({
        error: 404,
        message: "La page n'a pas été trouvée.",
      });
    },
  });
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
