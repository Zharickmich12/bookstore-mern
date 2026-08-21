const Order = require("../models/Order");
const Cart = require("../models/Cart");

const createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ userId: req.user.id }).populate("items.bookId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        message: "El carrito está vacío"
      });
    }

    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.bookId.price * item.quantity,
      0
    );

    const order = new Order({
      userId: req.user.id,
      items: cart.items.map((item) => ({
        bookId: item.bookId._id,
        quantity: item.quantity
      })),
      shippingAddress,
      paymentMethod,
      totalPrice
    });

    await order.save();

    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el pedido",
      error: error.message
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate("items.bookId")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error: error.message
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("items.bookId")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error: error.message
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Pedido no encontrado"
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el estado del pedido",
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
};