const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User' },
  items: [
    {
      bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: { type: Number, default: 0 },
  shippingAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'pending' }
},
   {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
