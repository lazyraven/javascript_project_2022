/* Duplicate Values remove from Array */

// By Array Numbers
const numbers = [1, 3, 5, 6, 3, 8, 4, 2, 6];

const removeDuplicate = new Set(numbers);
console.log("numbers", numbers);
console.log("removeDuplicate", removeDuplicate);

// By Array String
const fruits = [
  "banana",
  "apple",
  "orange",
  "lemon",
  "orange",
  "banana",
  "pear",
];
const removeDupFruits = new Set(fruits);
console.log("fruits:-", fruits);
console.log("removeDupFruits:-", removeDupFruits);

// Duplicate Values remove from Array of Object
const seen = new Set();
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" },
];

console.log("seen", seen);
const filteredArr = arr.filter((el) => {
  const duplicate = seen.has(el.id);
  console.log("duplicate", duplicate);
  seen.add(el.id);
  return !duplicate;
});

console.log("filteredArr", filteredArr);

// Eg: 2
let myArray = [
  { id: 10, other: "bla" },
  { id: 15, other: "meh" },
  { id: 10, other: "bla" },
];

let indexes = new Set();
myArray.forEach((a) => indexes.add(a.id));
console.log("indexes list", indexes, indexes.size);

// Eg:3
let myArray1 = [
  { id: 10, other: "bla" },
  { id: 15, other: "meh" },
  { id: 10, other: "bla" },
];
var set = new Set();
var result = [];
myArray1.forEach((item) => {
  if (!set.has(item.id)) {
    set.add(item.id);
    result.push(item);
  }
});

console.log("result", result);
