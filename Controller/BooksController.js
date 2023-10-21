import { Book } from "../models/bookModels.js";
const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        massage: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    res.status(201).send(book);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
};

const AllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
};

const oneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
};

const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        massage: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ massage: "Book not found" });
    }

    return res.status(200).send({ massage: "Book updated successfully!" });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ massage: "Book not found" });
    }

    return res.status(200).send({ massage: "Book deleted  successfully!" });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
};

export{
    createBook, AllBooks, oneBook, updateBook, deleteBook
}