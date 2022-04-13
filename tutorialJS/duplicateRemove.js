// Question 1 remove duplicate element
// let arr1 = [1, 2, 3, 1, 2, 0, 3, 1, 2, 1, 3];

// Type 1
// let resultArray = [];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(!resultArray.includes(arr1[i]));
//   if (!resultArray.includes(arr1[i])) {
//     resultArray.push(arr1[i]);
//     console.log("resultArray", resultArray);
//   }
// }
// Type 2
// arr1.forEach((item) => {
//   if (!resultArray.includes(item)) {
//     resultArray.push(item);
//     console.log(resultArray);
//   }
// });
// console.log(resultArray);

//Question 2 “javascript delete second last element of array”

// let spliceArr = [1, 2, 3, 4, 5];
// spliceArr.splice(spliceArr.length - 2);
// delete spliceArr[3];
// console.log(spliceArr);

// Removing Elements from End of a JavaScript Array
// var ar = [1, 2, 3, 4, 5, 6];
// ar.length = 4; // set length to remove elements
// console.log(ar); // [1, 2, 3, 4]

// The Lodash Array Remove Method
// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function (n) {
//   return n % 2 === 0;
// });
// console.log(array); // => [1, 3]console.log(evens);// => [2, 4]
