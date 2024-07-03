"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.getOneBook = exports.getAllBooks = exports.createBook = void 0;
const book_1 = __importDefault(require("../models/book"));
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishedDate, genre, summary } = req.body;
        if (!title || !author || !publishedDate || !genre || !summary) {
            return res.status(400).json({ status: false, error: "Missing input" });
        }
        const newBook = yield book_1.default.create(req.body);
        res.status(200).json({ status: true, data: newBook });
    }
    catch (error) {
        next(error);
    }
});
exports.createBook = createBook;
const getOneBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_1.default.findById(id);
        res.status(200).json({ status: true, data: book });
    }
    catch (error) {
        next(error);
    }
});
exports.getOneBook = getOneBook;
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield book_1.default.find();
        res.status(200).json({ status: true, data: allBooks });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllBooks = getAllBooks;
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            throw new Error("Missing input");
        const response = yield book_1.default.findByIdAndDelete(id);
        res.status(200).json({ success: response ? true : false, message: response ? "Delete success" : "No book delete" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBook = deleteBook;
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id || Object.keys(req.body).length === 0)
            throw new Error("Missing input");
        const response = yield book_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: response ? true : false, message: response ? "Update success" : "No book update", data: response });
    }
    catch (error) {
        next(error);
    }
});
exports.updateBook = updateBook;
