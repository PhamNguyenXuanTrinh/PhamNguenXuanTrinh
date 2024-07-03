import { Request, Response, NextFunction } from 'express';
import Book from '../models/book';

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author, publishedDate, genre, summary } = req.body;

    if (!title || !author || !publishedDate || !genre || !summary) {
      return res.status(400).json({ status: false, error: "Missing input" });
    }

    const newBook = await Book.create(req.body);
    res.status(200).json({ status: true, data: newBook });
  } catch (error) {
    next(error);
  }
};


const getOneBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json({ status: true, data: book });
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json({ status: true, data: allBooks });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Missing input");

    const response = await Book.findByIdAndDelete(id);
    res.status(200).json({ success: response ? true : false, message: response ? "Delete success" : "No book delete" });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id || Object.keys(req.body).length === 0) throw new Error("Missing input");

    const response = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: response ? true : false, message: response ? "Update success" : "No book update", data: response });
  } catch (error) {
    next(error);
  }
};


export {
  createBook,
  getAllBooks,
  getOneBook,
  deleteBook,
  updateBook,
};
