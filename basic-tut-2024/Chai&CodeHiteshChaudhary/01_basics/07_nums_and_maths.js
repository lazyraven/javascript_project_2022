const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const num1 = 23.9899;
// const num1 = 23.4899;

console.log(num1.toPrecision(3));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.ceil(4.2));
console.log(Math.ceil(4.6));

console.log(Math.floor(4.3));
console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // given value between 0 and 1
console.log(Math.random() * 10 + 1); //
console.log(Math.floor(Math.random() * 10) + 1); // if math random value come 0.0456738929 so((0.04567787*10) + 1) added 1+ so it'll give you 1.785685685 value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
