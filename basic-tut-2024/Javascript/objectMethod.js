const person = { firstname: "Nisha", lastname: "Yadav" };

const anotherPerson = person;

anotherPerson.firstname = "lazyraven";
console.log(person, anotherPerson);

console.log(person == anotherPerson);
