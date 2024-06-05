function fullName(greet) {
  console.log(this);
  //   console.log(`${greet} + " " + ${this.firstname} + " " + ${this.lastname} `);
  console.log(greet + " " + this.firstname + " " + this.lastname);

  console.log(`${greet} ${this.firstname} ${this.lastname} `);
}

const person1 = { firstname: "Nisha", lastname: "Yadav" };
const person2 = { firstname: "Lazyraven", lastname: "XYZ" };

// fullName(person1);

fullName.call(person1, "Hello");
fullName.call(person2, "Hi");

// Apply
function fullName1(greet) {
  //   console.log(this);
  console.log(`${greet} ${this.firstname} ${this.lastname} `);
}

const person3 = { firstname: "John", lastname: "Doe" };
const person4 = { firstname: "Jane", lastname: "Mark" };

fullName1.apply(person3, ["Hello"]);
fullName1.apply(person4, ["Hi"]);

// Bind
function fullName2(greet) {
  //   console.log(this);
  console.log(`${greet} ${this.firstname} ${this.lastname} `);
}

const person5 = { firstname: "Edwin", lastname: "Karls" };
const person6 = { firstname: "Rebecca", lastname: "Louis" };

console.log("Execute Bind");
const person5FullName = fullName2.bind(person5);
const person6FullName = fullName2.bind(person6);

person5FullName("Hello");
person6FullName("Hi");
