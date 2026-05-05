var a = 10;

function foo() {
  var b = 20;
  console.log(a + b);
}

foo();

// First, the global execution context is created. Variable a is stored as undefined, and function foo is stored in memory.
// Then in the execution phase, a is assigned 10.
// When foo() is called, a new function execution context is created. Inside it, b is stored and then assigned 20.
// The function accesses a from the global scope and prints 30.
// After execution, the function context is removed from the call stack.