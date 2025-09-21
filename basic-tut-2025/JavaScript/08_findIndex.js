const linearSearch = (arr, target) => arr.findIndex((el) => el === target);

// Example:
const numbers = [10, 25, 30, 45, 50];
console.log(linearSearch(numbers, 30)); // Output: 2
console.log(linearSearch(numbers, 99)); // Output: -1

// Find index of an object by a property (e.g., name):
const users = [
  { id: 1, name: "Nisha" },
  { id: 2, name: "Aarav" },
  { id: 3, name: "Meera" },
];

const linearSearchByName = (arr, target) =>
  arr.findIndex((ele) => ele.name === target);

// Example:
console.log(linearSearchByName(users, "Meera")); // Output: 2
console.log(linearSearchByName(users, "Ravi")); // Output: -1

const findUser = (arr, targetName) =>
  arr.find((user) => user.name === targetName);

// Example:
console.log(findUser(users, "Nisha")); // Output: { id: 1, name: "Nisha" }
console.log(findUser(users, "Ravi")); // Output: undefined
