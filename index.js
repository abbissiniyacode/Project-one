import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};


app.get("/", (req, res) => {
  res.send("Hello from the home route!");
});




app.listen(8080, () => {
  connect();
  console.log(`App is running on port 8080`);
});