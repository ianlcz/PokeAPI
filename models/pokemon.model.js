const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    nationalNumber: Number,
    name: Object,
    description: String,
    generation: String,
    category: String,
    size: Number,
    weight: Number,
    abilities: Array,
    EVYield: Array,
    baseExperienceYield: Number,
    hundredExperienceYield: Number,
    catchRate: Number,
    picture: Object,
    types: Array,
  },
  { collection: "Pokemon" }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
