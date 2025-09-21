// sort this value
console.log(
  "-------------------------SORT THE VALUES RESULT -------------------------"
);
// Question : 2 - Array sorted
const numbers1 = [12, 34, 45, 12, 6, 10, 23, 80, 15, 2];
console.log("original numbers1 ? ", numbers1);
const sortNumbers = numbers1.sort((a, b) => a - b);
console.log("sortNumbers---", sortNumbers);

// TOPIC : To sort a string array in JavaScript.

// Question : 2 - Array-String sorted

// Ex: 1 Default Alphabetical Sort (Ascending)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("original fruits ?", fruits);
const sortArrayStr = fruits.sort();
console.log("sortArrayStr---", sortArrayStr);

// Ex: 2  Descending Order Sort:
const descendingOrder = sortArrayStr.reverse();
console.log("descendingOrder---", descendingOrder);

// Ex: 3 Case-Insensitive Sort:,  localeCompare() :	For robust, language-aware sorting, especially when dealing with mixed cases, special characters, or international languages.
let words = ["banana", "Apple", "cherry", "Mango", "apple"];
console.log("original words ? ", words);
const caseInsenitiveSort = words.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("caseInsenitiveSort---", caseInsenitiveSort);

// OR
// const lowerCaseConvert = words.map((ele) => ele.toLowerCase());
// console.log("lowerCaseConvert---", lowerCaseConvert);
// const sortValue = lowerCaseConvert.sort();
// console.log("sortValue---", sortValue);

// const caseInsenitiveSort = words.sort(); // not correct

// Ex: 4 Sorting Without Modifying the Original Array (ES2023): toSorted : To create a new, sorted array without modifying the original (ES2023 and newer).
let months = ["Jan", "Feb", "Mar", "Apr"];
const sortedMonths = months.toSorted();
console.log("months--", months);
console.log("sortedMonths--", sortedMonths);

// Question : 1 - String sorted , sort():	For basic alphabetical sorting where case doesn't matter or is consistent.
const strValue1 = "Hi Nisha !!";
const inOneLineAns = strValue1.split("").sort().join("");
console.log("inOneLineAns---", inOneLineAns);

// OR

// const splitStrToConvertArray = strValue1.split("");
// console.log("splitStrToConvertArray---", splitStrToConvertArray);
// const resultSort = splitStrToConvertArray.sort();
// console.log("resultSort---", resultSort);

// const againConvertToString = resultSort.join("");
// console.log("againConvertToString---", againConvertToString);
