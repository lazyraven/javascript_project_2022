console.log(
  "..............Promise-Async-Await Result Check JS file....................."
);

console.log("Start");
const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve(" Resolved Value");
});
promise
  .then((res) => {
    console.log(res);
  })
  .catch(() => {});

async function test() {
  console.log("Inside Async Function");
  const result = await promise;
  console.log("Await Result", result);
}

test();
console.log("end");
