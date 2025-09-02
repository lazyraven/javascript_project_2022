// var greeting = "Hello";
// let name = "World";
// const product = "Iphone 14 Pro Max";

// console.log(greeting); // Heelo
// console.log(name); // World
// console.log(product); // Iphone 14 Pro Max

// greeting = "Hi";
// console.log(greeting); // Hi

// name = "Universe";
// console.log(name); // Universe

// // product = "Iphone 15 Pro Max"; // This will throw an error because product is a constant
// console.log(product); // error

//

function greet() {
  if (true) {
    var localVariable = "I am local to greet function";
    console.log(localVariable);
  }

  localVariable = "abcd";
  console.log(localVariable);
}
greet();
