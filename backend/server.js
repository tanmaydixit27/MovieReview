// // server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const movieRoutes = require('./routes/movieroutes')
// const reviewRoutes = require('./routes/reviewRoutes');
// const errorMiddleware = require('./middleware/errorMiddleware');

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Routes
// app.use('/api', movieRoutes);
// app.use('/api', reviewRoutes);

// // Error handling middleware
// app.use(errorMiddleware);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');
const connectToDB = require('./config/db');

// Initialize dotenv to read .env file
dotenv.config();

// Connect to MongoDB
connectToDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use movie routes
app.use('/api', movieRoutes);

// Error handling middleware (if using)
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
