// merge two sorted array
// mean
let arr1 = [1,3,5]
let arr2 = [2,4,6]
// output - [1, 2, 3, 4, 5, 6]

function sortedEle(nums) {
    return nums.sort((a, b) => a - b)
}
let result = [...sortedEle(arr1), ...sortedEle(arr2)];
console.log(" merge two sorted array", result);

const resultSort = sortedEle(result)
console.log("resultSort", resultSort);


// let result = [...arr1.sort((a,b)=>a-b), ...arr2.sort((a,b)=>a-b)];
// let result = [...arr1.sort(), ...arr2.sort()]; - will not work

// let arr1 = [2, 3, 4, 10, 9]
// let arr2 = [1, 6, 7, 8, 5]