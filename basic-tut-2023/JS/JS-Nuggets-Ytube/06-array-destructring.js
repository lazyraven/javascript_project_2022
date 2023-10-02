// faster/easier way to access/unpack variables from arrays
// array matters ordering

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

// 1.
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);
// const [fruit1,fruit2,fruit3 ] = fruits;

// 2.
// const [john, peter, bob, anna, kelly] = friends;
// console.log(friends);

// 3. with undefined
// const [john, peter, bob, anna, kelly, susan] = friends;

// console.log(john, peter, bob, anna, kelly);

// 4. extra item enemy added and remove john
// const [enemy, peter, bob, anna, kelly, susan] = friends;
// console.log(enemy, peter, bob, anna, kelly, susan); // output  john peter bob anna kelly undefined

// 5. remove peter, anna
const [enemy, , bob, , kelly, susan] = friends;
console.log(enemy, bob, kelly, susan); // output  john peter bob anna kelly undefined
// Swap Variables

let first = "bob";
let second = "john";

let temp = second;
second = first;
first = temp;

[second, first] = [first, second];

console.log(first, second);
