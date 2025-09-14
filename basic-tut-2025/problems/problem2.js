// Question Practice > Anagram

// console.log(areAnagrams("listen", "silent"));
const value = "lisTen";
const value1 = "silent";

// // Nisha's method
let valueSort = value.toLowerCase().split("").sort().join("");
let value1Sort = value1.toLowerCase().split("").sort().join("");

const result =
  valueSort.length !== value1Sort.length
    ? false
    : valueSort === value1Sort
    ? true
    : false;
console.log("is it anagram ? result", result);

console.log("valueSort", valueSort);
console.log("value1Sort", value1Sort);

// for (let i = 1; i <= value.length; i++) {
//   // result = result + value[value.length - i];

//   for (let j = 1; j <= value1.length; j++) {
//     // result = result + value[value.length - i];
//   }
// }

// ***************
// Question Practice > Palindrome

// // const value = 12321;
// const value = 123212;

// // Nisha's method 2
// const convertInString = value.toString();
// function palindrome(ele) {
//   let result = "";
//   for (let i = 0; i < ele.length; i++) {
//     let compareData = ele[ele.length - (i + 1)];
//     result = compareData == ele[i] ? true : false;
//     // if (compareData == ele[i]) {
//     //   console.log("true", true);
//     //   return (result = true);
//     // }
//     // console.log("false", false);
//     // return (result = false);
//   }
//   console.log("result", result);
// }
// palindrome(convertInString);

// // Nisha's method 1
// const convertStr = value.toString();
// console.log("convertStr", convertStr);

// let reverseValue = convertStr.split("").reverse().join("");
// console.log("reverseValue", reverseValue);

// let result =
//   reverseValue == convertStr
//     ? // console.log(true)
//       true
//     : false;
// //  console.log(false);
// console.log("result", result);

// Question Practice > Reverse string

// const value = "Nisha Yadav";

// let result = "";
// result = value.split("").reverse().join("");

// for (let i = 1; i <= value.length; i++) {
//   result = result + value[value.length - i];
// }
// console.log("result", result);

// console.log("Find the first non-repeating character in a string");
// // Write a function to return the first non-repeated character in "javascript".

// const value = "javascripty";

// // console.log("value sort", value.sort());

// let splitValue = value.split("");
// console.log("splitValue", splitValue);

// console.log("splitValue sort", splitValue.toSorted());

// function nonRepeatChars(ele) {
//   let resultArr = [ele[0]];
//   for (let i = 1; i < ele.length; i++) {
//     if (ele[i] != resultArr.includes[ele[i]]) {
//       resultArr = resultArr.push(ele[i]);
//     }
//   }
//   console.log("resultArr", resultArr);
//   // return resultArr;
// }
// console.log("function", nonRepeatChars(splitValue));
