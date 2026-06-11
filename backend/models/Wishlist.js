const mongoose = require('mongoose');
const { Schema } = mongoose;    

const wishlistSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User' },
  books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);