console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output : 
// A
// D
// C
// B

// Interview-Level Explanation

// A strong answer would sound like this:

// "JavaScript first runs synchronous code (A and D).
// The Promise callback goes to the microtask queue, while setTimeout goes to the macrotask queue.
// The event loop always executes microtasks before macrotasks, so C runs before B."