// Step 1: Initial Array

let arr = [10, 20, 30];

// Insert 25 at index 1
arr.splice(1, 0, 25);

// Delete element at index 2
arr.splice(2, 1);

console.log(arr); // [10, 25, 30]


// Explaination : Insert
// 1 → index where you want to insert
// 0 → number of elements to delete
// 25 → value to insert

// Explanation: Delete
// 2 → index to start deletion
// 1 → number of elements to remove


let nums = [10, 20, 30];

let result = []
function insert(arr, index) {
    result = [...arr.splice(0, index), 25, ...arr.splice(0, index + 1)]
    console.log("result", result);
    return result;
}
console.log(insert(nums, 2));

// Delete element at index 2
let nums1 = [50, 60, 65, 70];
// ⚠️ If you WANT to modify original array
function deleteAtIndex(arr, index) {
    return arr.splice(index, 1);
}
console.log(deleteAtIndex(nums1, 2));
console.log(nums1);


// ⚡ Important Tip
// splice() modifies the original array
// If you want a non-mutating approach, use slice() + spread operator