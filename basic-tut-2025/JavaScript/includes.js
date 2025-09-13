const strValue = "Hello World !!";
// const strValue = "Hello World !!" ? [23, 67, 5, 8, 43, 9, 13] : null;
const arrValue = [23, 67, 5, 8, 43, 9, 13];

// IMPORTANT Note!! - In this case both function will not  at same time for both value, so ternary one is most fruitful in this case.
// MOST CORRECT ANSWER
function checkPresenceValue(ele) {
  for (let i = 0; i < ele.length; i++) {
    const result = ele.includes("World")
      ? "This is string includes check"
      : ele.includes(8)
      ? "This is array includes check"
      : console.log(false);
    return result;
  }
}
console.log(checkPresenceValue(strValue));
console.log(checkPresenceValue(arrValue));

// IMPORTANT Notes!! - In this case both function called at same time for both value, so ternary one is most fruitful in this case.
// function checkPresenceValue(ele) {
//   //   console.log(typeof ele);
//   //   console.log(typeof arrValue);
//   //   console.log(Array.isArray(ele));
//   for (let i = 0; i < ele.length; i++) {
//     if (ele.includes("World")) {
//       return console.log(true);
//     } else if (ele.includes(8)) {
//       return console.log(true);
//     } else {
//       return console.log(false);
//     }
//   }
// }

// console.log(checkPresenceValue(strValue));
// console.log(checkPresenceValue(arrValue));
