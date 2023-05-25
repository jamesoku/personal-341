import { MongoClient, MongoClientOptions } from "mongodb";
const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();
export async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
