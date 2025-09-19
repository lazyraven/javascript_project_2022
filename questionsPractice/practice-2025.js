// console.log("1 - start");

// Promise.resolve().then(() => {
//   console.log("5- resolve called");
// });

// setTimeout(() => {
//   console.log("6- settime out called");
// });
// async function test(params) {
//   console.log("2- SYNC CALLED");
//   await console.log("3- wait called");
// }
// test();
// console.log("4 - end");

// EX : 2 : differnce async call after the end console
// console.log("1 - start");

// Promise.resolve().then(() => {
//   console.log("5- resolve called");
// });

// setTimeout(() => {
//   console.log("6- settime out called");
// });
// async function test(params) {
//   console.log("3- SYNC CALLED");
//   await console.log("4- wait called");
// }
// console.log("2 - end");
// test();

// Ex: 3
// console.log(
//   "------------------------- ASYNC-AWAIT RESULT ------------------------"
// );
// const fetchDataRec = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data received");
//   }, 1000);
// });

// fetchDataRec
//   .then((data) => console.log("1- .then promise", data))
//   .catch((err) => console.error(err));

// async function getData() {
//   try {
//     const data = await fetchDataRec;
//     console.log("2- after await", data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

// function delay(ms) {
//   console.log("2-delay fun call");

//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // Usage:
// async function example() {
//   console.log("1-Start");
//   await delay(2000); // waits 2 seconds
//   console.log("3- End after 2 seconds");
// }

// example();

// deep shaloow copy
// const original = { name: "Nisha", skills: ["JS", "React"] };

// const clone = structuredClone(original);
// console.log("clone", clone);

// clone.name = "Yadav";
// console.log("clone", clone);
// console.log("original", original);

//filter

let numbers = [12, 3, 15, 26, 19, 4, 8];

let initialVal = numbers[0];
let result = numbers.filter((item) => item > initialVal);
console.log("result", result);

// numbers.forEach((item) => {
//   if (item > initialVal) {
//     initialVal = item;
//   }
// });
// console.log("result", initialVal);
