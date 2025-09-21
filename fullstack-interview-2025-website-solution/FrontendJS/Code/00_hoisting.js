console.log(
  "------------------------- HOISTING RESULT ------------------------"
);

// var example
console.log(a); // undefined
var a = 10;

// let example
console.log(b); // ReferenceError
let b = 20;

// const example
console.log(c); // ReferenceError
const c = 30;
