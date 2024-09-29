// // // config/db.js
// // const mysql = require('mysql2');
// // const dotenv = require('dotenv');

// // dotenv.config();

// // const connection = mysql.createConnection({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASS,
// //   database: process.env.DB_NAME,
// // });

// // connection.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to the database:', err);
// //     return;
// //   }
// //   console.log('Connected to the MySQL database');
// // });

// // module.exports = connection;

// const { MongoClient } = require('mongodb');
// const dotenv = require('dotenv');

// dotenv.config();
// // mongodb://localhost:27017/
// const uri = `mongodb://localhost:27017/movie`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToDB() {
//   try {
//     await client.connect();
//     console.log('Connected to the MongoDB database');
//   } catch (err) {
//     console.error('Error connecting to the database:', err);
//   }
// }

// connectToDB();

// module.exports = client;



const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/movie", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit on failure
  }
}

module.exports = connectToDB;
