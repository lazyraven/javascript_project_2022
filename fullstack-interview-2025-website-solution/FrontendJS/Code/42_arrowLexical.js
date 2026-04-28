//1. Regular Function (this changes)

const obj = {
  name: "Nisha",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Nisha 
//  Here, this refers to the object because the function is called as a method.

//2. Arrow Function (this is lexical)
const obj = {
  name: "Nisha",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet(); // undefined
// Arrow functions don’t have their own this.
// They take this from the surrounding scope, which is usually the global scope here, so it prints undefined.

//3. Practical Use Case (Very Important)
function Person() {
  this.name = "Nisha";

  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

new Person(); // Nisha
// Inside setTimeout, the arrow function inherits this from Person, so it correctly logs ‘Nisha’.
// If we used a regular function, this would refer to the global object instead.”