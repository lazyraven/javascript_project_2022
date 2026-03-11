function test() {
  console.log(x);
  var x = 5;
  function x() {}
  console.log(x);
}
test();

// output -
// [Function: x]
// 5

// Reason :
// JavaScript hoists both function declarations and variable declarations, but:
// 👉 Function declarations take priority over var

// So internally, it becomes:
// function test() {
//   function x() {}   // highest priority
//   var x;            // ignored because x already exists

//   console.log(x);   // 👉 function x
//   x = 5;
//   console.log(x);   // 👉 5
// }

// 🧠 Key Rule (Very Important for Interviews)
// Function declarations override var during hoisting
// var does NOT overwrite a function during the hoisting phase
// But assignment (x = 5) happens at runtime and replaces it