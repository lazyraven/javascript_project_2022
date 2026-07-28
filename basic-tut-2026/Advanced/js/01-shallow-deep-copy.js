// Primitives — copied by value
// let a = 5, b = a;
// b = 10;
// console.log(a); // 5 (unchanged)

// Objects — copied by reference
let x = { val: 5 };
let y = x;
// console.log(x)
y.val = 10;
console.log(x.val); // 10 (same reference)

// Deep clone to avoid mutation
let z = JSON.parse(JSON.stringify(x));
// let z = structuredClone(x);

z.val = 30;
console.log(z);
console.log(x);

// or: structuredClone(x)  (modern)