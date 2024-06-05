//hoisting
myPlace = "Rajasthan"; // var is hoisted
console.log(myPlace);
var myPlace;

let myName = "Nisha";

sayHi(); // valid
function sayHi() {
  let greet = "Hi";
  console.log(greet, myName);
}

sayHello(); //error
let sayHello = function () {
  console.log(myName);
};
