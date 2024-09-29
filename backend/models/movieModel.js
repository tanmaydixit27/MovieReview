// models/movieModel.js
const db = require('../config/db');

const Movie = {
  create: (name, releaseDate, callback) => {
    const query = 'INSERT INTO movies (name, releaseDate) VALUES (?, ?)';
    db.query(query, [name, releaseDate], callback);
  },
  getAll: (callback) => {
    const query = 'SELECT * FROM movies';
    db.query(query, callback);
  },
  // Additional methods (update, delete, etc.) go here
};

module.exports = Movie;
