const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Bookstore API' });
});

// Rutas
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});