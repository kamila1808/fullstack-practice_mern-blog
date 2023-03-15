import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js"

const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

//Middlewares
app.use(cors()); //разрешить отправлять запросы с разных ip адресов
app.use(express.json()); //чтобы express понимал, что из фронтенда мы будем отправлять данные в формате json

//Routes
app.use("/api/auth", authRoute)

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.a2fzmjd.mongodb.net/test`
    );
    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.log(error);
  }
}
start();