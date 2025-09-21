// utils.js (module)
const path = require("path");
const fs = require("fs");

function readFile(filename) {
  const filePath = path.join(__dirname, filename);
  return fs.readFileSync(filePath, "utf-8");
}

module.exports = { readFile };

// app.js
const { readFile } = require("./utils");
console.log(readFile("sample.txt"));
