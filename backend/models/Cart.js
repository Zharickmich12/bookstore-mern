const mongoose = require('mongoose');
const { Schema } = mongoose;    

const cartSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User' },
  items: [
    {
      bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
      quantity: { type: Number, default: 1 }
    }
  ]
});

module.exports = mongoose.model('Cart', cartSchema);
