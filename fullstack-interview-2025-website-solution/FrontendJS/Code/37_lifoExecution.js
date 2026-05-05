function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

function third() {
  second();
  console.log("Third");
}

third();


// Initially, the global execution context is pushed onto the stack.
// When third() is called, its execution context is pushed.
// Inside third, second() is called, so second is pushed onto the stack.
// Then first() is called, so it is pushed on top.
// Now first executes and is popped off.
// Then second continues, prints ‘Second’, and is popped.
// Finally, third prints ‘Third’ and is removed.
// This shows the LIFO behavior — last function added is executed first.