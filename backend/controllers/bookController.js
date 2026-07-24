const Book = require('../models/Book');

async function getBooks(req, res) {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createBook(req, res) {
    try {
        const { title, author, description, price } = req.body;
        const book = new Book({ title, author, description, price });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook
};