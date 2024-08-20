const express = require("express");
const morgan = require("morgan");

// Enabling express
const app = express();

// Route Imports
const userRouter = require("./routes/userRoutes");

// Middleware
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Connected ⚡");
});
app.use(userRouter);

const PORT = process.env.PORT || 4000;
app
  .listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });
