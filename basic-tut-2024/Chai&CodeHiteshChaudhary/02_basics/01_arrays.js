// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// array methods =>
// push, pop, shift, unshift, concat, flat, filter, map, reduce

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// join => Important
const newArr = myArr.join(); // o/p will come in string

console.log(myArr);
console.log(newArr);

// slice, splice => Important b/w difference

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // splice method manipulate original array => that will change main array also with result
console.log("C ", myArr);
console.log(myn2);

//Array.of => will convert into array

// (spread operator => for add multiple array in one array variable) (Araay.isArray => use for check is it array pr not)

// flat => Important - New Thing
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const flatArrayResult = another_array.flat(Infinity);
console.log(flatArrayResult);

console.log(Array.isArray("Nisha"));

// Array.from => will convert in array
console.log(Array.from("Nisha"));
console.log(Array.from({ name: "NishaObj" })); // interesting Important   - New Thing

// Important - New Thing
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3, 600));

// By Nisha
// Array.of method
console.log(Array.of(401));
console.log(Array.of({ name: "NishaObj", id: 301 }));

// Array.from => method
// console.log(Array.from(401));
// console.log(Array.from({ name: "NishaObj", id: 301 })); // interesting Important
