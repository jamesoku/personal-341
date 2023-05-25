const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
});

const Food_ing = mongoose.model("food", foodSchema);

module.exports = Food_ing;
