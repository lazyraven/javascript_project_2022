// Important
// 02_deep-shallow-copy.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat()
// , Array.prototype.slice(), Array.from(), and Object.assign()) create shallow copies rather than deep copies.

// Shallow Copy  => it'll change existing array when reassigned array to new copy array variable

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList);

ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);

console.log(ingredientsList);
console.log(ingredientsListCopy);

// Deep copy => JSON.parse(JSON.stringify(ingredientsList)) // it'll not change into the existing array

// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

// console.log(ingredientsListDeepCopy);

// ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// console.log(ingredientsList[1].list);
// console.log(ingredientsList);
// console.log(ingredientsListDeepCopy);
