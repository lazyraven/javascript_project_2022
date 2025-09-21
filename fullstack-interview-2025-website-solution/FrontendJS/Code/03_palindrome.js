console.log(
  "------------------------- PALINDROME RESULT ------------------------"
);
console.log(
  "Convert String Name values Lower Case toLowerCase() and Upper  Case toUpperCase();"
);
console.log(
  "payload- The result will come true when we render true value after for loop - After for loop add result true",
  "yes"
);

let number = 1234321;
let number1 = 129821;
let userName = "Nisha Yadav";
let namePal = "Nisin";
let namePal1 = "NavecaN";

let strNamePal = namePal.toUpperCase();
let strNamePal1 = namePal1.toLowerCase();

function palindromeResult(value) {
  let valueStr = value.toString();
  for (let i = 0; i <= valueStr.length; i++) {
    if (valueStr[i] != valueStr[valueStr.length - (i + 1)]) {
      return "No";
    }
  }
  return "Yes";
}
console.log(number, "- is It palindrome ?", palindromeResult(number));
console.log(number1, "- is It palindrome ?", palindromeResult(number1));
console.log(userName, "- is It palindrome ?", palindromeResult(userName));
console.log(namePal, "- is It palindrome ?", palindromeResult(namePal));
console.log(
  strNamePal,
  "- is It palindrome ?(convert tolowercase or uppercase) =>",
  palindromeResult(strNamePal)
);
console.log(namePal1, "- is It palindrome ?", palindromeResult(namePal1));
console.log(strNamePal1, "- is It palindrome ?", palindromeResult(strNamePal1));

// Another way to solve this problem
// const num1 = "1234321";
// const num2 = "129821";
// const num3 = 56765;
// let strNum3 = num3.toString();

// const name1 = "ABCBA";
// const name2 = "Nisha Yadav";

// const name3 = "Nisin";

// let strName3 = name3.toUpperCase();
// let strName3Copy = name3.toLowerCase();

// function paldFun(ele) {
//   let newStr = ele.split("").reverse().join("");
//   if (ele != newStr) {
//     return false;
//   }
//   return true;
// }

// console.log("1234321 - is It palindrome ?", paldFun(num1));
// console.log("129821 - is It palindrome ?", paldFun(num2));
// console.log("56765 - is It palindrome ?", paldFun(strNum3));
// console.log("ABCBA - is It palindrome ?", paldFun(name1));
// console.log("Nisha Yadav - is It palindrome ?", paldFun(name2));
// console.log("Nitin - is It palindrome ?", paldFun(name3));
// console.log("strName3", strName3);
// console.log("strName3Copy", strName3Copy);
// console.log(
//   "Nisin (this is convert with Upeercase and Lowercase) - is It palindrome ?",
//   paldFun(strName3)
// );

// function convertStringCase(ele) {
//   return ele.toUpperCase();
// }
// convertStringCase(namePal);
