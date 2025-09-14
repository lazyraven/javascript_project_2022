// utils.mjs
export function greet(name) {
  return `Hello, ${name}`;
}

// app.mjs
import { greet } from "./utils.mjs";
console.log(greet("Nisha"));
