// Importation des modules
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const favicon = require("serve-favicon");

// Instanciation du serveur
const app = express();

// Initialisation des routes
const publicRouter = require("./routes");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(favicon("./public/images/favicon.png"));
app.use(methodOverride("_method"));

/*  Public routes
    Such as /, /login
*/
app.use("/", publicRouter);

// Error's middlewares
app.use((req, res, next) => {
  res.status(404);
  res.format({
    html: () => {
      res.render("error", {
        status: res.statusCode,
        panel: true,
      });
    },
    "application/json": () => {
      res.json({
        error: res.statusCode,
        message: "La page n'a pas été trouvée.",
      });
    },
  });
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.set("Content-Type", "text/plain");
  res.format({
    text: () => {
      res.send(JSON.stringify("Error : " + err.message));
    },

    html: () => {
      res.render("error");
    },

    json: () => {
      res.json({
        error: err.status,
        message: err.message,
      });
    },
  });
});

module.exports = app;
