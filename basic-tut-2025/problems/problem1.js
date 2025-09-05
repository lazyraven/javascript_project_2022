function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));

let leaseESN = ["123-098", "879-009", "234-009"];
// let resultStr = leaseESN[0];
// need this result comma seperate
let resultStr = leaseESN.join(", ");
console.log("resultStr", resultStr);
