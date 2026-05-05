//1. Function Declaration

greet();

function greet() {
  console.log("Hello");
}
// This works because function declarations are fully hoisted, so the function is available before its definition.”

//2. Function Expression
sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi");
};
// “Here, only the variable sayHi is hoisted as undefined.
// The function is assigned later, so calling it before assignment results in an error.

//3. With let / const (Important)
sayHello(); // ReferenceError

const sayHello = function () {
  console.log("Hello");
};
// With const, the variable is in the Temporal Dead Zone before initialization, so accessing it throws a ReferenceError

