// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// filter

const youngPeople = people.filter((peopleRec) => peopleRec.age >= 25);
console.log("youngPeople", youngPeople);

const positionDev = people.filter(
  (peopleRec) => peopleRec.position == "developer"
);
console.log("positionDev", positionDev);

const seniorDev = people.filter(
  (peopleRec) => peopleRec.position == "seniorDev"
);
console.log("seniorDev", seniorDev);

// find

const fruits = ["orange", "lemon", "mango"];

const findLemon = fruits.find((fruit) => fruit == "lemon");
const findLemonOne = fruits.find((fruit) => fruit == "tomato");

console.log("findLemon", findLemon);
console.log("findLemonOne", findLemonOne);

const randomPerson = people.find((rec) => rec.age < 35);
console.log("randomPerson", randomPerson);

const oldPerson = people.find((rec) => rec.age > 35);
console.log("oldPerson", oldPerson);

const peter = people.find((rec) => rec.name == "peter");
console.log("peter", peter);

const anna = people.filter((rec) => rec.name == "anna");
console.log("anna", anna);

console.log("anna position", anna[0].position);
console.log("peter position", peter.position);
