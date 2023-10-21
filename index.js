import mongoose from "mongoose";
import { PORT, MongoDB_URL } from "./config.js";
import express from "express";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors())
app.use('/books', booksRoute)



mongoose
  .connect(MongoDB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listen to port: ${PORT}`);
    });
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

  