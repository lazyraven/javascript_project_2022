// Check if array is sorted
// Input: [1,2,3,4] → true in javascript ?

// Alternative (shorter way using every):
const isSorted = (arr) => arr.every((val, i, a) => i === 0 || a[i - 1] <= val);

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false
