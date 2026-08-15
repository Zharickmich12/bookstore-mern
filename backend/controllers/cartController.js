const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el carrito",
      error: error.message
    });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { bookId, quantity } = req.body;

    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    const item = cart.items.find(
      (item) => item.bookId.toString() === bookId.toString()
    );

    if (!item) {
      return res.status(404).json({ message: "Libro no encontrado en el carrito" });
    }

    item.quantity = quantity;

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el item",
      error: error.message
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { bookId } = req.params;

    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    cart.items = cart.items.filter(
      (item) => item.bookId.toString() !== bookId.toString()
    );

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el item",
      error: error.message
    });
  }
};

const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    cart.items = [];

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error al vaciar el carrito",
      error: error.message
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
};