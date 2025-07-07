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

addTwo(5); // errror
// addTwo is not hoisted because it is a function expression
const addTwo = function(num){
  console.log("addTwo called");
    return num + 2
}

console.log(addone(5)) // valid

function addone(num){
    return num + 1
}