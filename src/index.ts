import express from "express";
import { connectToMongoDB } from "../DB/DB";
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");
const app = express();

app.use("/", require("../routes/ingridients"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectToMongoDB().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
