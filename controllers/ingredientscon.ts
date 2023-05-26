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

  getingredient: async (req, res) => {
    try {
      const foods = await Food.findById(req.params.id);
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

  updateIngredients: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, ingredients } = req.body;

      // Find the food object by id and update it
      const updatedFood = await Food.findByIdAndUpdate(
        id,
        { name, ingredients },
        { new: true }
      );

      // If the food was not found, send a 404 response
      if (!updatedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      // Respond with the updated food
      res.status(200).json(updatedFood);
    } catch (err) {
      // If there was an error, respond with a 400 status and the error message
      res.status(400).json({ message: err.message });
    }
  },

  deleteFood: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the food object by id and remove it
      const deletedFood = await Food.findByIdAndRemove(id);

      // If the food was not found, send a 404 response
      if (!deletedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      // Respond with a success message
      res.status(200).json({ message: "Food deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = Ingcon;
