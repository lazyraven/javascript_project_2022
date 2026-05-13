// Problem 3: Reverse an Array
// Input: [1,2,3,4]
// Output: [4,3,2,1]

// Input: ["a","b","c"]
// Output: ["c","b","a"]

// Input: [10]
// Output: [10]


function reverseArr(arr) {
    const result = [];
    if (arr.length === 0) {
        return result;
    }
    for (let i = arr.length-1; i >=0; i--) {
        result.push(arr[i])
    }
   return result;
}

console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([10]));
console.log(reverseArr([]));


// solution is correct and clean.

// What You Did Well
// 1. Correct reverse traversal - This is the standard and efficient way to reverse using loops.
// 2. Separate result array  - Good approach:
// const result = []; - You avoided mutating the original array.

// 3. Edge case handling - 
// if (arr.length === 0) -Nice addition.


// Time & Space Complexity
// Time Complexity
// O(n)
// because every element is visited once.

// Space Complexity
// O(n)
// because a new array is created.

// In professional code, usually better to return:
// return []; - because the function is expected to always return an array.
// This keeps return types consistent.