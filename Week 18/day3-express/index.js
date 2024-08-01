const express = require("express");
const app = express();

const PORT = 4000;

const userList = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    age: 25,
    email: "john@example.com",
    phone: "555-1234",
  },
  {
    id: 2,
    name: "Jane",
    lastName: "Smith",
    age: 24,
    email: "jane@example.com",
    phone: "555-5678",
  },
  {
    id: 3,
    name: "Jim",
    lastName: "Brown",
    age: 30,
    email: "jim@example.com",
    phone: "555-8765",
  },
  {
    id: 4,
    name: "Jill",
    lastName: "Johnson",
    age: 28,
    email: "jill@example.com",
    phone: "555-4321",
  },
  {
    id: 5,
    name: "Jack",
    lastName: "Williams",
    age: 27,
    email: "jack@example.com",
    phone: "555-6789",
  },
  {
    id: 6,
    name: "Jenny",
    lastName: "Taylor",
    age: 25,
    email: "jenny@example.com",
    phone: "555-9876",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/about", (req, res) => {
  res.send(`<div>
        <h1>I like BBQ</h1>
        <img src=https://res.cloudinary.com/fatty-butts-bbq/images/f_auto,q_auto/v1639161944/fattybuttsbbq/Smoked-Beef-Short-Ribs-Dino-Ribs-Recipe/Smoked-Beef-Short-Ribs-Dino-Ribs-Recipe.jpg?_i=AA/>
        </div>`);
});

app.get("/api/userlist", (req, res) => {
  res.json(userList);
});

// Route to get user by ID
app.get("/api/userList/:id", (req, res) => {
  const requestedId = parseInt(req.params.id, 10); // Convert the id to an integer
  const user = userList.find((user) => user.id === requestedId);
  if (user) {
    res.status(200).json({
      status: "success",
      data: { firstName: user.name, lastName: user.lastName },
    });
  } else {
    res.status(404).json({ status: "error", message: "User not found!" });
  }
});

// Route to get user by name
app.get("/api/userList/name/:name", (req, res) => {
  const requestedName = req.params.name;
  const user = userList.find((user) => user.name === requestedName);
  if (user) {
    res.status(200).json({ status: "success", data: user });
  } else {
    res.status(404).json({ status: "error", message: "User not found!" });
  }
});

app.get("/api/contact", (req, res) => {
  res.send(`<div>
        <h1>Gavin McFall</h1>
        <a href="mailto:gavinm@missionreadyhq.com?subject=Hello%20World&body=This%20is%20a%20test%20email.">Email: gavinm@missionreadyhq.com</a>
        </div>`);
});

app.get("/api/profile", function (req, res) {
  console.log(req.query);
  console.log(req.query.age);
  const requestedAge = req.query.age;
  const profile = userList.filter((user) => user.age === Number(requestedAge));
  console.log(profile);
  if (profile) {
    res.status(200).json({ status: "Success", data:profile);
  } else {
    res.status(404).json({ status: "error", message: "User not found!" });
  }
});

app
  .listen(PORT, function () {
    console.log(`Server started on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is already in use`);
    }
    console.log("Server is not running", error);
  });
