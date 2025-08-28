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
console.log(reverseString(skillName));
