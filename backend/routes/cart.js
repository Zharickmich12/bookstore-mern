const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require("../controllers/cartController");

const { protect } = require("../middleware/auth");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.put("/", protect, updateCartItem);
router.delete("/clear", protect, clearCart);
router.delete("/:bookId", protect, removeFromCart);

module.exports = router;