const express = require("express");
const app = express();

// Built-in middleware
app.use(express.json());

// Application-level middleware
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Router-level middleware
const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello!"));
app.use("/api", router);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

app.listen(3000);
