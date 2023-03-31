import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comment.js";

const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middlewares
app.use(cors()); //разрешить отправлять запросы с разных ip адресов
app.use(express.json()); //чтобы express понимал, что из фронтенда мы будем отправлять данные в формате json
app.use(fileUpload()); //чтобы картинку загрузить на сервер
app.use(express.static("uploads")); //экспрессу нужно дать понять, где у нас будут храниться статические файлы

//Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.a2fzmjd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
