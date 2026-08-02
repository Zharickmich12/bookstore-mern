const bookController = require('../controllers/bookController');
const { protect } = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/', protect, admin, bookController.createBook);
router.put('/:id', protect, admin, bookController.updateBook);
router.delete('/:id', protect, admin, bookController.deleteBook);

module.exports = router;