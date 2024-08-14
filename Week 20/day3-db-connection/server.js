const express = require("express");
// get the client
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Error handling for the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as ID", connection.threadId);
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM team_mate;", (err, result) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      res.status(500).send("Error executing query");
      return;
    }
    res.send(result);
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
