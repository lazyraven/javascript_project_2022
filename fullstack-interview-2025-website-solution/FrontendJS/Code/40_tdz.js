// Temporal Dead Zone (let/const)
//1. Basic TDZ

console.log(a); // ReferenceError
let a = 10;

// Here, a is hoisted but not initialized.
// So accessing it before the declaration results in a ReferenceError.
// This period is called the Temporal Dead Zone.

//2. Compare with var (Very Important)
console.log(b); // undefined
var b = 20;
// var is also hoisted, but it is initialized with undefined.
// That’s why it does not throw an error like let or const.


//3. Block Scope TDZ Example
let x = 5;

if (true) {
  console.log(x); // ReferenceError
  let x = 10;
}
// Inside the block, a new x is created and stays in the Temporal Dead Zone until its declaration.
// So even though there is a global x, accessing it here throws an error.