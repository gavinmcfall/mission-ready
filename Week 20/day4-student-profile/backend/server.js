//Our module imports
const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
app.use(cors("http://localhost:5173"));
require("dotenv").config();

// Database Config
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

//Endpoints
app.get("/", (req, res) => {
  res.send("Backend is Connected DOGG");
});

app.get("/api/v1/users", (req, res) => {
  pool.query("SELECT * FROM team_mate;", (err, result) => {
    if (err) {
      console.log("Database query error! ", err);
      return res
        .status(500)
        .json({ status: "error", message: "Database query error!" });
    }
    res.status(200).json({ status: "success", data: result });
  });
});

const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log("Server error: ", error);
  });
