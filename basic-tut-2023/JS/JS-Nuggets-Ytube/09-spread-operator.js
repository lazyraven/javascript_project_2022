// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = "udemy";

const letter = [...udemy];
console.log("letters", letter);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, ...girls, bestFriend];
// const friends = [...boys, bestFriend, ...girls];

console.log("friends", friends);

const newFriend = [...friends];
// console.log("newFriend2", newFriend);

newFriend[0] = "nancy";

console.log("newFriend", newFriend);
console.log("friends", friends);

// ES2018 - ES8 Objects

const person = { name: "John", job: "developer" };

const newPerson = { ...person, city: "chicago", name: "Anna" };
console.log("person", person);
console.log("newPerson", newPerson);
