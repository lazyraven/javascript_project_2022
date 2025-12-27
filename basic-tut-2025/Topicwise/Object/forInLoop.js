// A for...in loop in JavaScript is used to iterate over the keys (property names) of an object.
// Syntax
// for (let key in obj) {
//   // code to execute
// }

// Example: Object iteration
const person = {
  name: "Nisha",
  age: 25,
  role: "Developer",
};

for (let key in person) {
  console.log(key, person[key]);
}

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

// Example: Array (not recommended)
const colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log(index, colors[index]);
}
