// Primitive Example
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// How to explain:
// “Here b gets a copy of a, so changing b doesn’t affect a.”


// Reference Example

let obj1 = { name: "Nisha" };
let obj2 = obj1;

obj2.name = "Developer";

console.log(obj1.name); // Developer
console.log(obj2.name); // Developer

// Both variables point to the same object, so changing one affects the other.

// How to avoid reference mutation?
// We can use spread operator or methods like Object.assign() to create a new copy.
let obj1 = { name: "Nisha" };
let obj2 = { ...obj1 }; // shallow copy

obj2.name = "Dev";

console.log(obj1.name); // Nisha