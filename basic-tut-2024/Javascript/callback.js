//Definition : A callback function is a function passed into another function as an argument, which is called inside the outerFunction.

//callback function
const greet = (name) => {
  console.log("Hi " + name);
};

//function
const callMe = (callback) => {
  let name = prompt("Enter your name");
  callback(name);
};
//passing function as parameter
callMe(greet);

// Definition: 2
//callback and callback hell

let fruits = ["Apple", "Banana", "Kiwi"];

const animate = (fruitName) => {
  console.log("animating", fruitName);
};

const animateAll = (animate) => {
  setTimeout(() => {
    animate(fruits[0]);
    setTimeout(() => {
      animate(fruits[1]);
      setTimeout(() => {
        animate(fruits[2]);
      }, 1000);
    }, 1000);
  }, 1000);
};
animateAll(animate);

// Nisha's practice

// const animateAll = (animate) => {
//   setTimeout(() => {
//     animate(fruits[0]);
//   }, 1000);
//   setTimeout(() => {
//     animate(fruits[1]);
//   }, 1000);
//   setTimeout(() => {
//     animate(fruits[2]);
//   }, 1000);
// };

// animateAll(animate);
