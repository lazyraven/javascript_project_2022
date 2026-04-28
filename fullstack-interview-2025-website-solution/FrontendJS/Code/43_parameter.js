//1. Parameters

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
// Here, a and b are parameters, and 2 and 3 are arguments passed during the function call.

//2. Default Parameters Example
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Nisha"); // Hello Nisha
// “If no value is passed, the default ‘Guest’ is used.
// If a value is provided, it overrides the default.

//3. Important Case — undefined vs null

function test(value = 10) {
  console.log(value);
}

test(undefined); // 10
test(null);      // null
// Default values are used only when the argument is undefined.
// If null is passed, it is treated as an actual value.

//4. Using Expressions as Default Values
function multiply(a, b = a * 2) {
  return b;
}

console.log(multiply(5)); // 10
// Default values can be expressions and can even depend on other parameters


// 5.Bonus
function demo(a = b, b = 5) {
  console.log(a, b);
}

demo(); // ReferenceError
// Parameters are evaluated left to right, so a cannot use b before it is initialized