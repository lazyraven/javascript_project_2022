console.log("Find the first non-repeating character in a string");
// Write a function to return the first non-repeated character in "javascript".

const value = "javascripty";

console.log("value sort", value.sort());

let splitValue = value.split("");
console.log("splitValue", splitValue);

console.log("splitValue sort", splitValue.sort());

function nonRepeatChars(ele) {
  let resultArr = [ele[0]];
  for (let i = 0; i < ele.length; i++) {}
  console.log("resultArr", resultArr);
}
console.log(nonRepeatChars(splitValue));
