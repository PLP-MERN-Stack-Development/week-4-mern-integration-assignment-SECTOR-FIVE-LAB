// server.js - Main server file for the MERN blog application

// Import required modules
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import routes
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const authRoutes = require('./routes/auth');

// // Load environment variables dynamically based on NODE_ENV
// const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
// dotenv.config({ path: envFile });

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: process.env.CORS_CREDENTIALS === 'true',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log requests in development mode
// if (process.env.NODE_ENV === 'development') {
//   app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
//   });
// }

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('MERN Blog API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI|| 'mongodb://localhost:27017/mern_blog' , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    console.log(`Connected to MongoDB (${process.env.MONGO_URI})`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (${process.env.URL})`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // Close server & exit process
  process.exit(1);
});

module.exports = app;