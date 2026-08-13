const CategoryController = require('../controllers/categoryController');
const { protect } = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin');

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', protect, admin, CategoryController.createCategory);
router.put('/:id', protect, admin, CategoryController.updateCategory);
router.delete('/:id', protect, admin, CategoryController.deleteCategory);

module.exports = router;