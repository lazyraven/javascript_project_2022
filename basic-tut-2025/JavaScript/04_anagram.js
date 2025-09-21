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
