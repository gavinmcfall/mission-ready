"use strict";
const express = require("express");
const app = express();
const cors = require("cors");

const users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "sally@dvds.com", password: "sally123" },
];

app.use(cors());
app.use(express.json());

app.get("/food", (req, res) => {
  res.json({ food: "pizza" });
});

app.post("/login-with-fetch", (req, res) => {
  console.log(req.body);

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      res.sendStatus(200);
    }
  }

  res.sendStatus(401);
});

app.listen(4000);
