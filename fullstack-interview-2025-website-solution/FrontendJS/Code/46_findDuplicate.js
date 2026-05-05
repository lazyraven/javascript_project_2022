
// Practice: Find duplicates in array
const arr = [2, 3, 4, 5, 3, 6, 5, 7];

// function findDuplicate(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (!result.includes(nums[i])) {
//             result.push(nums[i]);
//         } 
//         // else{
//         //     result.push(nums[i]);
//         // }
//     }
//     console.log("result", result);
//     return result;
// }

// console.log("findDuplicate", findDuplicate(arr));

const map = new Map();

function findDuplicateWithMap(nums) {
    let result = [];    
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        }
         else {
            result.push(nums[i]);
        }
    }
    console.log("map", map);
    console.log("result", result);
    return result;
}

console.log("findDuplicateWithMap", findDuplicateWithMap(arr)); 