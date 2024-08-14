const express = require("express");
const mysql = require("mysql2");
const app = express();
require("dotenv").config();

const windowsHost = "pc-vengeance.local"; // IP address of the Windows host

const pool = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//Root Query
app.get("/", (req, res) => {
  pool.query("SELECT * FROM country;", (err, result) => {
    if (err) {
      //Handle the Error
      console.log("Database query error! ", err);
      return res
        .status(500)
        .json({ status: "error", message: "Database query error!" });
    }
    //Query was successful, sent the result
    res.send(result);
  });
});

//Exercise #1 - Oceania Query
app.get("/oceania", (req, res) => {
  pool.query(
    "SELECT * FROM country WHERE continent = 'Oceania' LIMIT 10;",
    (err, result) => {
      if (err) {
        //Handle the Error
        console.log("Database query error! ", err);
        return res
          .status(500)
          .json({ status: "error", message: "Database query error!" });
      }
      //Query was successful, sent the result
      res.send(result);
    }
  );
});

// Exercise #2 - Country Query by Code
app.get("/country/:code", (req, res) => {
  const countryCode = req.params.code;

  console.log("Received request for country code:", countryCode); // Log the code

  pool.query(
    "SELECT * FROM country WHERE code = ?;", // Use ? for parameterized queries in MySQL
    [countryCode], // Pass the parameters here
    (err, result) => {
      if (err) {
        // Handle the Error and log it
        console.log("Database query error! ", err);
        return res
          .status(500)
          .json({ status: "error", message: "Database query error!" });
      }

      // Log the result to see what the query returns
      console.log("Query result:", result);

      // Check if a country was found
      if (result.length === 0) {
        return res
          .status(404)
          .json({ status: "not found", message: "Country not found!" });
      }

      // Query was successful, send the result
      res.send(result[0]);
    }
  );
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
