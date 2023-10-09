// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

// 1. simple promise check Pending, Rejected, FulFilled
const promiseCheck = new Promise((resolve, reject) => {
  //   console.log("hello world!!");
});
console.log(promiseCheck);

// 2. resolve, reject handled
const promiseInject = new Promise((resolve, reject) => {
  resolve("resolved fulfilled !!");
  //   reject("there is a error throw !");
});
console.log(promiseInject);

// 3. .then, .catch case
const promise = new Promise((resolve, reject) => {
  resolve("promise resolve then case");
  // reject("promise error catch");
});
console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 4. example with random number

let value = 2;
const promiseRandomNum = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  if (randomNum == value) {
    resolve("you guessed correctly !");
  } else {
    reject("wrong number!");
  }
});

// to check output refresh page 2-3 times and check in console
console.log(promiseRandomNum);
promiseRandomNum
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
