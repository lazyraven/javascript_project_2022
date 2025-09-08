console.log("🚀 JavaScript Async Cheat Sheet");

// 1. Promise Basics
const promiseTest1 = new Promise((resolve, reject) => {
  resolve("Success");
});

promiseTest1
  .then((res) => console.log(res)) // Success
  .catch((err) => console.log(err));

// 2. Async / Await
async function getData() {
  try {
    const res = await Promise.resolve("Done");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
getData(); // Done

// 3. Event Loop Priority
// 4. Tricky Example
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise then"));

(async function test() {
  console.log("Inside async");
  await Promise.resolve();
  console.log("After await");
})();

console.log("End");
