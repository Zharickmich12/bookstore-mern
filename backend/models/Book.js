const mongoose = require('mongoose');
const { Schema } = mongoose;    

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  price: Number,
  stock: Number,
  image: String,
  isbn: Number,
  publishedYear: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);