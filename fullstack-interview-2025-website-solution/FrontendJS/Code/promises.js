console.log(
  "------------------------- PROMISES RESULT -------------------------"
);
console.log(
  "Check Other practice => C:workspace-nisha\x01_github\x02_Javascriptjavascript_project_2022\basic-tut-2025JavaScript"
);
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received !");
  }, 1000);
});
fetchData
  .then((data) => {
    console.log("success !", data);
  })
  .catch((err) => {
    console.log("err", err);
  });

//   mixes setTimeout, Promises, and async/await.
console.log(
  "------------------------- PROMISES (mixes setTimeout, Promises, and async/await.) RESULT -------------------------"
);
console.log("Start");

setTimeout(() => {
  console.log("setimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise then");
});

async function test(params) {
  console.log("Inside async");
  await Promise.resolve();
  console.log("After Await");
}
test();
console.log("End");
