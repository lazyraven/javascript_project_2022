console.log(
  "------------------------- PROTOTYPE RESULT ------------------------"
);

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const nisha = new Person("Nisha");
nisha.greet();

const obj = {};
console.log(obj.toString());
// Not found in obj → found in Object.prototype → returns "[object Object]"
// By default, plain objects inherit Object.prototype.toString(), which always gives [object Object].

console.log(JSON.stringify(obj)); // {}

// Using a Class (modern & clean way)

class PersonTwo {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return `Id: ${this.id}, Name: ${this.name}`;
  }
}
const p1 = new PersonTwo(101, "Nisha");
const p2 = new PersonTwo(102, "Deepa");

console.log(p1.toString());
console.log(p2.toString());
