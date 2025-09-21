console.log(
  "-------------------------CANCEL PROMISES RESULT -------------------------"
);

// ✅ Implementation with Cancel

function delay(ms) {
  let timerId;
  let rejectFn;

  const promise = new Promise((resolve, reject) => {
    rejectFn = reject;
    timerId = setTimeout(resolve, ms);
  });

  return {
    promise,
    cancel: () => {
      clearTimeout(timerId);
      rejectFn(new Error("Delay cancelled"));
    },
  };
}

// Usage
async function example() {
  const delayed = delay(3000);
  setTimeout(() => {
    delayed.cancel(), 1000;
  }); // cancel after 1s
  try {
    await delayed.promise;
    console.log("Completed !!");
  } catch (err) {
    console.log("Cancelled", err.message);
  }
}
example();

// 🔑 How it Works
// delay(ms) returns an object with:

// promise → resolves after ms.

// cancel() → clears the timer and rejects the promise.

// If cancel() is called before ms ends, the promise is rejected.

// If not cancelled, it resolves normally.

// ************************* //
// Next concept you can take this :

// ow you a version using AbortController, which is the modern standard way to cancel async tasks in JavaScript?
// ✅ Implementation with AbortController

// 🔑 Why AbortController?
// Standardized way to cancel async operations (used in fetch, streams, etc.).
// You can reuse the same signal to cancel multiple tasks at once.
// Cleaner and more consistent than custom cancel() methods.

// how this delay can be combined with fetch (e.g., cancel a request if it takes too long)?
// ✅ Combine delay + fetch with AbortController
