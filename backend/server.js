// server.js
const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieroutes')
const reviewRoutes = require('./routes/reviewRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', movieRoutes);
app.use('/api', reviewRoutes);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
