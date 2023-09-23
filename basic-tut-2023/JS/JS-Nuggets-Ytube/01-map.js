// MAP Method
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'john',
        age: 26,
        position: 'intern',
    },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// Questions 1. grab a age,
//           2. return a object with use of Map,
//           3. grab the result into the html

// Answer 1:
const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log("age", ages);

// Answer 2:
const getObj = (rec) => {
    return {
        firstName: rec.name.toUpperCase(),
        oldAge: rec.age
    }
}
const newObj = people.map(getObj);
console.log("newObj", newObj);

// Answer 3:

const getNames = (person) => person.name;

const names = people.map((person) => `<h2>${person.name}</h2>`);

const result = document.querySelector('#result');

// join using for remove extra comma from result
result.innerHTML = names.join('').toUpperCase();



