import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./Routes/booksRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);
const URL = process.env.MongoDB_URL;
const PORT = process.env.PORT | 8080;

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listen to port: ${PORT}`);
    });
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
