console.log(
  "------------------------- MERGE TWO SORTED ARRAY RESULT ------------------------"
);
const arr1 = [1, 8, 6, 4, 7];
const arr2 = [9, 34, 12, 45, 78];

const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3);

// try without sort array with while loop
const sortArr = arr3.sort((a, b) => a - b);
console.log("sortArr", sortArr);
