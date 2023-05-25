const Food = require("../models/ing");
const Ingcon = {
  getallingredients: async (req, res) => {
    try {
      const foods = await Food.find();
      res.json(foods);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  addingredients: async (req, res) => {
    try {
      const { name, ingredients } = req.body;

      // Create a new food object with the name and ingredients
      const food = new Food({ name, ingredients });
      // validate and save the food document
      const savedFood = await food.save();

      res.status(201).json(savedFood);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = Ingcon;
