
// Find unique elements

// INPUT : nums = [1,2,2,3,4,4,5]
// OUTPUT : [1, 3, 5]

// INPUT : nums = [7,7,7]
// OUTPUT : []

// INPUT : nums = [9]
// OUTPUT : [9]

// function findUniqueEles(nums) {
//     const result = []
  
//         const uniqueEles = new Set();
//         const duplicateEles = new Set();

//         for (num of nums) {
//             if (!uniqueEles.has(num)) {
//                 uniqueEles.add(num)
//             } else {
//                 duplicateEles.add(num)
//             }
//         }
//         for (num1 of uniqueEles) {
//             if (!duplicateEles.has(num1)) {
//                 result.push(num1)
//             }
//         }
//         return result;
// }

// By Map - mby frquency

function findUniqueEles(nums) {
    const freq = new Map();

    for (num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    const result = []

    for (const [num, count] of freq) {
        if (count === 1) {
            result.push(num)
        }
    }
    return result;
}

console.log(findUniqueEles([1, 2, 2, 3, 4, 4, 5]))
console.log(findUniqueEles([7, 7, 7]))
console.log(findUniqueEles([9]))
console.log(findUniqueEles([]))