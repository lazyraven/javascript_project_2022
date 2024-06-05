// Higher Order Function with Arrray.map() and Array.filter()

const numbers = [23, 15, 67, 28, 33, 98];

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

console.log(numbers);

const numberLessThan33 = numbers.filter((num) => num < 33);
console.log(numberLessThan33);
