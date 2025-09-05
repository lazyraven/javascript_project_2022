// ❓ Q1 – Implicit vs Explicit Binding
const person = {
  name: "Nisha",
  greet: function () {
    console.log(this.name);
  },
};

const greetFn = person.greet;

greetFn(); // ?
greetFn.call(person);
