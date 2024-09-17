let name = "Javascript";

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log("reverseTerm called", reversed);
  return reversed;
}
reverse(name);

// let result = name.split("").reverse().join("");
// console.log("result", result);

// function getReverse(data) {
//   console.log("getReverse called", data.length);
//   let result = "";

//   for (let i = 0; i < data.length; i++) {
//     console.log("data[data.length - i]", data[data.length - (i + 1)]);
//     result += data[data.length - (i + 1)];
//   }
//   console.log("result", result);
// }
// getReverse(name);

// function reverseElement(ele) {
//   let reverseTerm = "";
//   for (let i = 1; i <= ele.length; i++) {
//     reverseTerm = reverseTerm + ele[ele.length - i];
//   }
//   console.log("reverseTerm called", reverseTerm);
// }
// reverseElement(name);
