import mongoose from "mongoose";
import { app } from "./app";

// Async Start
const start = async () => {
  // Checking for JWT Token
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY Variable is not defined");
  }

  // DB Connection
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    console.log("Connected to mongodb");
  } catch (error) {
    console.error(error);
  }

  // Serving
  app.listen(3000, () => {
    console.log("Listening on port: 3000");
  });
};

start();
