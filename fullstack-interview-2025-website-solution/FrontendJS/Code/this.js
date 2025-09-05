console.log(
  "------------------------- THIS KEY RESULT ------------------------"
);

// 🔹 Example 1: Global vs Object Method
const user = {
  name: "Nisha",
  greet: function () {
    console.log(this.name);
  },
};

const greetFn = user.greet;

user.greet(); // ?
greetFn(); // ?
console.log(greetFn());

// Answer:

// user.greet() → "Nisha" (because this points to user)
// greetFn() → undefined (or global object’s name in non-strict mode), because the function lost its object context.

// 🔹 Example 2: Nested Function
const person = {
  name: "Nisha",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

person.greet(); // ?undefined
// Answer: undefined
// Why? Because inside inner(), this does not refer to person anymore — it falls back to global.
// ✅ Fix: Use an arrow function.

const persontest = {
  name: "Nisha",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

persontest.greet(); // "Nisha"

// 🔹 Example 3: setTimeout
const obj1 = {
  name: "Nisha",
  show: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj1.show(); // ?
// Answer: undefined
// Because inside the callback, this refers to global.
// ✅ Fix with arrow function:
const objtest = {
  name: "Nisha",
  show: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

objtest.show();
// Now output: "Nisha"

// 🔹 Example 4: Constructor Function
function User(name) {
  this.name = name;
}

const u1 = new User("Nisha");
console.log(u1.name); // ?
// Answer: "Nisha"
// Because when using new, this points to the new object being created.

// 🔹 Example 5: Object with Arrow Function Method
const objtest1 = {
  name: "Nisha",
  sayName: () => {
    console.log(this.name);
  },
};

objtest1.sayName(); // ?
// Answer: undefined
// use arrow functions don’t bind their own this; here it inherits from the global scope.

class PersonTest {
  constructor(name) {
    this.name = name;
  }
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 500);
  }
}

const p = new PersonTest("Nisha");
p.greet(); // ?

// Output: undefined ✅

// Why?

// The callback inside setTimeout is a regular function.

// In a regular function, this defaults to window (or undefined in strict mode).

// So this.name does not refer to the class instance.
