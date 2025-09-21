const express = require("express");
const app = express();
app.use(express.json());

let users = [];

// GET all users
app.get("/users", (req, res) => res.json(users));

// POST new user
app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index !== -1) users[index] = req.body;
  res.json(req.body);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => console.log("Server running on port 3000"));
