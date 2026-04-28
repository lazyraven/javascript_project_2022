// Global Scope
var a = 10;

function test() {
  console.log(a);
}

test(); // 10 - Here, a is globally scoped, so it is accessible inside the function.

// Function Scope
function test() {
  var b = 20;
  console.log(b);
}

test();
// console.log(b); // Error 
// b is function-scoped, so it cannot be accessed outside the function.

// Block Scope
if (true) {
  let x = 30;
  const y = 40;
  console.log(x, y);
}

// console.log(x, y); // Error
// let and const are block-scoped, so they only exist inside the block

// Important Trap (Interview Favorite)
if (true) {
  var z = 50;
}

console.log(z); // 50
// var does not have block scope, so it becomes accessible outside the block. This is why let and const are preferred