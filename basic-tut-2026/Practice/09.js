// Problem 2: Find the Maximum Number in an Array
// Input: [3,7,2,9,1]
// Output: 9

// Input: [-5,-2,-9,-1]
// Output: -1

// Input: [10]
// Output: 10

function findMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }
    return maxVal;
}
console.log(findMax([3,7,2,9,1]));
console.log(findMax([-5,-2,-9,-1]));
console.log(findMax([10]));
console.log(findMax([]));

// Your solution is correct and well written.
// You used the optimal approach for this problem.

// Time Complexity
// Your solution is optimal:
// O(n)
// because the array is scanned only once.

// Small Professional Improvements
// You can add edge-case handling for empty arrays.

// if (arr.length === 0) {
//     return "Array is empty";
// }