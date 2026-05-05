// var Hoisting

console.log(a); // undefined
var a = 10;
console.log(a); // 10
// Here, var a is hoisted to the top and initialized as undefined.
// So the first log prints undefined.
// Then during execution, a is assigned 10, so the second log prints 10.

// Code Example — Function Hoisting
greet();

function greet() {
  console.log("Hello");
}
// Function declarations are fully hoisted, so we can call greet() even before its definition.
// JavaScript already has the complete function in memory during the creation phase.”

// Important Contrast
sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi");
};

// Here, only the variable sayHi is hoisted as undefined, not the function.
// So when we try to call it, it throws an error because undefined is not a function.