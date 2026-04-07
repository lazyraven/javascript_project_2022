// 1. let and const -Block-scoped variables (better than var)
let count = 10;
const PI = 3.14;

// 2. Arrow Functions - Shorter syntax + no own this
const add = (a, b) => a + b;

// 3. Template Literals - Use backticks ` for dynamic strings
const name1 = "Nisha";
console.log(`Hello, ${name1}`);

// 4. Destructuring - Extract values from arrays/objects
const user = { name2: "Nisha", age: 22 };
const { name2, age } = user;

// 5. Default Parameters
function greet(name = "Guest") {
  return `Hello ${name}`;
}

// 6. Spread Operator (...) - Expands values
const arr1 = [1, 2, 3];
const newArr = [...arr1, 4];

// 7. Rest Operator (...) -Collects values
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

 const numbers = [1,2,3,4];
    const [first, , third, ...rest] = numbers;
    console.log(first, third, rest); // 1 3 [4]

// 8. Classes - Cleaner syntax for objects
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// 9. Modules (import/export)
// export
export const name = "Nisha";

// import
import { name } from "./file.js";

    // math.js
        export function add(a, b) {
        return a + b;
        }

    // main.js
    import { add } from './math.js';
    console.log(add(2,3)); // 5

// 10. Promises - Handle async operations
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 1000);
  });
};

// 11. for...of Loop
const arr = [10, 20, 30];

for (const value of arr) {
  console.log(value);
}

// 12. Map & Set
const set = new Set([1, 2, 2, 3]); // {1,2,3}

const map = new Map();
map.set("name", "Nisha");