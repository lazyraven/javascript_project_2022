// utils.cjs
function greet(name) {
  return `Hello, ${name}`;
}
module.exports = { greet };

// app.cjs
const { greet } = require("./utils.cjs");
console.log(greet("Nisha"));
