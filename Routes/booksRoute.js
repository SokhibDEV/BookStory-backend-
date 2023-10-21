import express from "express";
import {oneBook, AllBooks, createBook, updateBook, deleteBook} from '../Controller/BooksController.js'
const router = express.Router();

router.post("/", createBook);

router.get("/", AllBooks);

router.get("/:id", oneBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export {
  router
}
