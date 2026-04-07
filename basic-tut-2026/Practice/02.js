
// 1. insertAt() (Non-mutating)
const insertAt = (arr, index, value) => [
  ...arr.slice(0, index),
  value,
  ...arr.slice(index)
];

// 2. removeAt() (Non-mutating)
const removeAt = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1)
];


// slice() → does not modify original array
// ... (spread) → helps rebuild a new array
// This pattern is widely used in state updates (React, Redux)


let arr = [10, 20, 30];

// Insert 25 at index 1
let newArr = insertAt(arr, 1, 25);
console.log(newArr); 
// [10, 25, 20, 30]

// Delete index 2
let finalArr = removeAt(newArr, 2);
console.log(finalArr); 
// [10, 25, 30]

// Original array remains unchanged
console.log(arr); 
// [10, 20, 30]


// // ------------------------------------------


// // Correct way to insert 25 at index 1

// // ✔️ Non-mutating (recommended)
// let arr = [10, 20, 30];

// const newArr = [...arr.slice(0, 1), 25, ...arr.slice(1)];
// console.log("arr", arr);       // [10, 20, 30]
// console.log("newArr", newArr); // [10, 25, 20, 30]

// // Explanation :
// // slice(0, 1) → elements before index 1 → [10]
// // 25 → inserted value
// // slice(1) → rest of array → [20, 30]


// // Delete element at index 2 (Non-mutating)
// let finalArr = [
//   ...newArr.slice(0, 2),  // before index 2
//   ...newArr.slice(3)      // after index 2
// ];
// console.log(finalArr); // [10, 25, 30]

// // Explanation:
// // slice(0, 2) → [10, 25]
// // slice(3) → [30]
// // Combine → [10, 25, 30]

// // ✔️ Mutating version (using splice)
// let arr1 = [10, 20, 30];
// arr1.splice(1, 0, 25);
// console.log("arr1", arr1); // [10, 25, 20, 30]

// // Important
// // slice(start, end) → copy only
// // splice(index, deleteCount, item) → modify + insert/remove

