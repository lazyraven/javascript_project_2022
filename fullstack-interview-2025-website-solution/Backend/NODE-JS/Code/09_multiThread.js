// Code – Worker Threads (Node.js)
// Can you show a multi-threaded example in Node.js?
const { Worker } = require("worker_threads");
const worker = new Worker("./worker.js");
worker.on("message", (msg) => {
  console.log("Result:", msg);
});
// This creates a separate thread for CPU-intensive work, improving performance.
