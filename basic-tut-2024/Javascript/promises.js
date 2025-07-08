// Definition:  Promises are javascript objects that represent an eventual completion or failure of an asynchronous operation.

// callback function
const greet = (name) => {
  console.log("Hi " + name);
};

//function
const callMe = () => {
  return new Promise((resolve, reject) => {
    let name = prompt("Enter your name");
    if (name) resolve(name);
    reject(false);
  });
};

//start call
callMe().then((result) => greet(result));

// Definition: 2

let fruits = ["Apple", "Banana", "Kiwi"];

const animate = (fruitName) => {
  console.log(fruitName);
};

const animateOne = (fruitName, animate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      animate(fruitName);
      resolve(true);
    }, 1000);
  });
};

const animateAll = (animate) => {
  animateOne(fruits[0], animate)
    .then(() => animateOne(fruits[1], animate))
    .then(() => animateOne(fruits[2], animate))
    .catch((err) => console.log("some error occured", err));
};

animateAll(animate);

// 2025 reading

// syntax promise :
let promise = new Promise(function (resolve, reject) {
  // some async work
  let success = true;

  if (success) {
    resolve("It worked!"); // fulfilled
  } else {
    reject("It failed!"); // rejected
  }
});
promise
  .then(function (result) {
    console.log(result); // "It worked!"
  })
  .catch(function (error) {
    console.error(error); // "It failed!"
  });

function orderPizza() {
  return new Promise((resolve, reject) => {
    let isDelivered = true;

    if (isDelivered) {
      resolve("Pizza is here! 🍕");
    } else {
      reject("No pizza today 😢");
    }
  });
}

orderPizza()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
