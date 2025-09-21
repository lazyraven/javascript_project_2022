const express = require("express");
const app = express();

// Middleware example
app.use(express.json()); // parses JSON body

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware/route
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
