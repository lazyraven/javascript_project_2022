console.log(
  "------------------------- REVERSE STRING RESULT ------------------------"
);
const skillName = "Javascript";

function reverseString(value) {
  let reverseValue = "";
  for (let i = 1; i <= value.length; i++) {
    reverseValue = reverseValue + value[value.length - i];
  }
  //   OR
  //   reverseValue = value.split("").reverse().join("");
  console.log("reverseValue", reverseValue);
  return reverseValue;
}
console.log(skillName, "=>", reverseString(skillName));

// Interview Question : Coding: Reverse Each Word
let str = "Hello World";
// // output - "olleH dlroW"

const result1 = str
  .split(" ")
  .map((w) => w.split("").reverse().join(""))
  .join(" ");
console.log("result1", result1);
