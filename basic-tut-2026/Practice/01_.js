
// Step 1: Initial Array

let arr = [10, 20, 30];

// Insert 25 at index 1
arr.splice(1, 0, 25);

// Delete element at index 2
arr.splice(2, 1);

console.log(arr); // [10, 25, 30]

let nums = [10, 20, 30];

// Step 2: Insert 25 at index 1

// nums.splice(1, 0, 25);
// console.log(nums);

// Explaination :
// 1 → index where you want to insert
// 0 → number of elements to delete
// 25 → value to insert


let result = []
// function insert(num){
// result = [...num.splice(0,1), 25, ...num.splice(0, 3)]
// console.log("result", result);
// return result;
// }
// console.log(insert(nums));

function insert(arr, index) {
    result = [...arr.splice(0, index), 25, ...arr.splice(0, index + 1)]
    console.log("result", result);

    return result;
}
console.log(insert(nums, 2));


// Step 3: Delete element at index 2
let nums1 = [50, 60, 65, 70];
// nums1.splice(2, 1);
// console.log("nums1", nums1);

// Explanation:
// 2 → index to start deletion
// 1 → number of elements to remove

// ⚠️ If you WANT to modify original array
function deleteAtIndex(arr, index) {
    result = arr.splice(index, 1);
    return result;
}
console.log(deleteAtIndex(nums1, 2));
console.log(nums1);


// ⚡ Important Tip
// splice() modifies the original array
// If you want a non-mutating approach, use slice() + spread operator (I can show that too if you want)
