const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  address: String,
  phone: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);