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
      const food = await Food.findById(req.params.id);
      if (!food) {
        return res.status(404).json({ message: "Food not found" });
      }
      res.json(food);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  addingredients: async (req, res) => {
    try {
      const { name, ingredients } = req.body;

      if (!name || !ingredients) {
        return res
          .status(400)
          .json({ message: "Name and ingredients are required" });
      }

      const food = new Food({ name, ingredients });
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

      if (!name || !ingredients) {
        return res
          .status(400)
          .json({ message: "Name and ingredients are required" });
      }

      const updatedFood = await Food.findByIdAndUpdate(
        id,
        { name, ingredients },
        { new: true }
      );

      if (!updatedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      res.status(200).json(updatedFood);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteFood: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedFood = await Food.findByIdAndRemove(id);

      if (!deletedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      res.status(200).json({ message: "Food deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = Ingcon;
