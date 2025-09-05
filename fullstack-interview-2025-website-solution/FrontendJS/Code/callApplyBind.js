console.log(
  "------------------------- CALL APPLY BIND RESULT ------------------------"
);
// https://chatgpt.com/share/68bac113-2d34-8013-9c57-6f5221d3afef

const personCAB = { name: "Nisha" };

function greet(greeting, lang) {
  console.log(`${greeting}, ${this.name} ! (Language): ${lang}`);
}
// call → arguments individually
greet.call(person, "Hello", "English");
// Output: Hello, Nisha! (Language: English)

// apply → arguments as array
greet.apply(person, ["Hola", "Spanish"]);
// Output: Hola, Nisha! (Language: Spanish)

// bind → returns new function, invoke later
const boundGreet = greet.bind(person, "Namaste", "Hindi");
boundGreet();
// Output: Namaste, Nisha! (Language: Hindi)

// Question Pracice
// ❓ Q1 – Implicit vs Explicit Binding
const personTest = {
  name: "Nisha",
  greet: function () {
    console.log(this.name);
  },
};

const greetFnCAB = personTest.greet;

greetFnCAB(); // ?
greetFnCAB.call(personTest); // ?

// ❓ Q2 – Arrow inside Object
console.log("❓ Q2 – Arrow inside Object");
const objCAB = {
  name: "Nisha",
  say: () => {
    console.log(this.name);
  },
};

objCAB.say(); // ?

// ❓ Q3 – Nested Object
const userCAB = {
  name: "Nisha",
  details: {
    name: "JS",
    show: function () {
      console.log(this.name);
    },
  },
};

userCAB.details.show(); // ?

// ❓ Q4 – Bind
function showName() {
  console.log(this.name);
}

const userCAB1 = { name: "Nisha" };

const boundFn = showName.bind(userCAB1);
boundFn(); // ?

// ❓ Q5 – Tricky Arrow in setTimeout
const userCAB2 = {
  name: "Nisha",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 300);
  },
};

userCAB2.greet(); // ?
