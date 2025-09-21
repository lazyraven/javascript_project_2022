const person = {
  name: "Nisha",
  greet: function () {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
// ➡️ Here, this points to the person object.

// 2. In a Regular Function (Global Scope)
function showThis() {
  "use strict";
  console.log(this);
}

showThis(); // undefined (because of strict mode)

// 3. Inside a Constructor Function
function Car(model) {
  this.model = model;
}

const car1 = new Car("Tesla");
console.log(car1.model);

// 4. In a Class
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(this.type + " makes a sound");
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// 5. Arrow Functions
const obj = {
  name: "Nisha",
  regular: function () {
    console.log("regular:", this.name);
  },
  arrow: () => {
    console.log("arrow:", this.name);
  },
};

obj.regular(); // regular: Nisha
obj.arrow(); // arrow: undefined (or window.name in browser)
