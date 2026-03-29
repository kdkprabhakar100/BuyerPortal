const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Property", propertySchema);