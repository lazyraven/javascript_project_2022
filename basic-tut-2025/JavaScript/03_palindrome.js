const value = 12321;
// const value = 123212;

// Nisha's method to solve this question :

// Method 2
const convertInString = value.toString();
function palindrome(ele) {
  let result = "";
  for (let i = 0; i < ele.length; i++) {
    let compareData = ele[ele.length - (i + 1)];
    result = compareData == ele[i] ? true : false;
  }
  console.log("result", result);
}
palindrome(convertInString);

// Method 1
const convertStr = value.toString();
console.log("convertStr", convertStr);

let reverseValue = convertStr.split("").reverse().join("");
console.log("reverseValue", reverseValue);

let result =
  reverseValue == convertStr
    ? // console.log(true)
      true
    : false;
//  console.log(false);
console.log("result", result);
