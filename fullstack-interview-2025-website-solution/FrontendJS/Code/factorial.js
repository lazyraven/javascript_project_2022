console.log(
  "------------------------- Factorial RESULT ------------------------"
);

function factorial(ele) {
  let result = 1;
  for (let i = 1; i <= ele; i++) {
    result = result * i;
  }
  return result;
}
console.log("factorial(5)", factorial(5));
console.log("factorial(4)", factorial(4));

// for (let i = 0; i < ele; i++) {
//   result = result * (ele - i);
// }
// ele * result;
// 5 * 4 * 3 * 2 * 1;
// ele * (element - 1)(element - 2)(element - 3)(element - 4);
