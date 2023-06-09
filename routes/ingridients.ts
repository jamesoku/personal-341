import { Router } from "express";
const router = Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const ingcon = require("../controllers/ingredientscon");
router.use("/", require("../routes/swagger"));
//
router.get("/ing", ingcon.getallingredients);
router.post("/ing", ingcon.addingredients);
//
router.get("/ing/:id", ingcon.getingredient);
router.put("/ing/:id", ingcon.updateIngredients);
router.delete("/ing/:id", ingcon.deleteFood);
module.exports = router;
