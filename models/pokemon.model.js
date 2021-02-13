const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    nationalNumber: Number,
    name: Object,
    picture: Object,
    types: Array,
  },
  { collection: "Pokemon" }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
