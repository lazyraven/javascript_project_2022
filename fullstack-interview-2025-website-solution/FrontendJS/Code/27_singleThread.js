// Code Scenario – Single Thread Blocking
// What happens if a long task runs in JavaScript?

console.log("Start");

for (let i = 0; i < 1e9; i++) {}

console.log("End");
// This blocks the main thread.
// The browser becomes unresponsive until the loop finishes.

// Code Scenario – Async (Non-Blocking)
// How do you avoid blocking in JavaScript?
console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 0);

console.log("End");
// Even though the timeout is zero, the callback runs after the current execution completes.
// This keeps the main thread free
