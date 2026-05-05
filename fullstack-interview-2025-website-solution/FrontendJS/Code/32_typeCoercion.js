// Example 1: == with coercion
console.log(5 == "5"); // true - Here, JavaScript converts the string "5" to a number before comparison, so it becomes true

// Example 2: === without coercion
console.log(5 === "5"); // false - “Here, types are different—number and string—so it returns false

// Example 3: Tricky coercion

console.log(false == 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

// == has special coercion rules.
// examples:
// false becomes 0 and
// null and undefined are loosely equal but not strictly equal.”


// Bonus: Explicit Coercion Example - Here we are manually converting types, which is called explicit coercion.
let value = "123";

console.log(Number(value)); // 123
console.log(String(123));   // "123"
console.log(Boolean(1));    // true