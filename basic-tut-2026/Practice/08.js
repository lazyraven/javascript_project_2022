// https://chatgpt.com/g/g-p-69d8c5fe26488191a2228938541cb3df-dsa-topicquecover/c/69fc1407-14c8-83e8-9295-5d42c6304788
// DSA-2025 REPO ALSO EXPLAINED

// Problem 1: Find Duplicate Elements in an Array
// Input: [1,2,3,2,4,1]
// Output: [1,2]

// Input: [5,6,7,8]
// Output: []

// Input: [1,1,1,2,2,3]
// Output: [1,2]

const input1 = [1, 2, 3, 2, 4, 1]
const input2 = [5, 6, 7, 8]
const input3 = [1, 1, 1, 2, 2, 3]

// function find_duplicate(arr) {
//     const uniqueValues = []
//     const result = []
//     for (num of arr) {
//         if (!uniqueValues.includes(num)) {
//             uniqueValues.push(num);
//         } else if(!result.includes(num)) { // this condition take it for input3 problem, because if I directly use else it'll give output is [1,1,2], so need to remove duplicate also from here
//             result.push(num);
//         }
//     }
//     console.log("uniqueValues", uniqueValues);
//     return result;
// }
// console.log("find_duplicate result1", find_duplicate(input1));
// console.log("find_duplicate result2", find_duplicate(input2));
// console.log("find_duplicate result3", find_duplicate(input3));

// Time Complexity
// Your current approach uses includes() multiple times.
// Complexity:
// O(n²)


function find_duplicate(arr) {
    const uniqueValues = new Set()
    const result = new Set()
    for (num of arr) {
        if (!uniqueValues.has(num)) {
            uniqueValues.add(num)
        } else{
            result.add(num);
        }
    }
    console.log("uniqueValues", uniqueValues);
    return result;
    // return uniqueValues;
}
console.log("find_duplicate result1", find_duplicate([1, 2, 3, 2, 4, 1]));
console.log("find_duplicate result2", find_duplicate([5, 6, 7, 8]));
console.log("find_duplicate result3", find_duplicate([1, 1, 1, 2, 2, 3]));
