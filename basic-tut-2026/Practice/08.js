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

function find_duplicate(arr) {
    const uniqueValues = []
    const result = []
    for (num of arr) {
        if (!uniqueValues.includes(num)) {
            uniqueValues.push(num);
        } else if(!result.includes(num)) { // this condition take it for input3 problem, because if I directly use else it'll give output is [1,1,2], so need to remove duplicate also from here
            result.push(num);
        }
    }
    console.log("uniqueValues", uniqueValues);
    return result;
}
console.log("find_duplicate result1", find_duplicate(input1));
console.log("find_duplicate result2", find_duplicate(input2));
console.log("find_duplicate result3", find_duplicate(input3));