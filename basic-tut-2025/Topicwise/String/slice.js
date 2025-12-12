// Task 1: Get the last 3 characters of a string.
// Input: "developer"
// Output: "per"

const str = "developer";
console.log(str.slice(-3));

// Task 2: Replace all spaces with dashes.

// Input: "hello world js"
// Output: "hello-world-js"
const strText = "hello world js";
console.log(strText.replace(/ /g, "-"));

// Task 3: Mask first N characters with *.

// Input: "12345678", mask first 4
// Output: "****5678"
function maskFirstN(str, n) {
  //   console.log(str.slice(n));
  //   console.log(str.slice(-n));
  //   console.log("*".repeat(n));

  return "*".repeat(n) + str.slice(n);
}
console.log(maskFirstN("1234545678", 4));

// ----------------------------------------------- Other Practices Of Slice Method Questions  (Easy to Advanced)-----------------------------------------------
console.log(
  "--------------------------- Other Practices Of Slice Method Questions  (Easy to Advanced) ------------------------------"
);

// 1. Basic Examples (Strings & Arrays)
// 1.1 Slice part of a string
const text = "JavaScript";
const part = text.slice(0, 4);
console.log("Part Result > ", part);

// 1.2 Slice last characters
const str1 = "developer";
console.log("Result > ", str1.slice(-3));

// 1.3 Slice array elements
const arr = [10, 20, 30, 40, 50]; // output : [20,30,40]
console.log("Resule arrStr", arr.slice(1, 4));

// 2. Moderate Examples
// 2.1 Copy an entire array
const numbers = [1, 2, 3];
const copy = numbers.slice();
console.log("Result Copy", copy);
// console.log("Resule Copy1", copy.slice(1, 2));
// console.log("Resule Copy2", copy, numbers);

// 2.2 Remove first element (non-mutating)
const arr1 = ["a", "b", "c", "d"];
const newArr = arr1.slice(1);
console.log("Result newArr", newArr, arr1);

// 2.3 Convert array-like object // (Slice is often used on NodeList or arguments)
function demo() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray);
}
demo("x", "y", "z");

// 3. Advanced Examples
// 3.1 Extract chunks from an array
const data = [1, 2, 3, 4, 5, 6, 7, 8]; // output1 : [1,2,3], output2: [4,5,6]
const chunk1 = data.slice(0, 3);
const chunk2 = data.slice(3, 6);
console.log("chunk1", chunk1);
console.log("chunk2", chunk2);

// 3.2 Create a shallow copy before modifying
const original = [{ id: 1 }, { id: 2 }]; // output : // [{ id: 99 }, { id: 2 }] → shows shallow copy behavior
// const copy1 = [{ id: 1 }, { id: 2 }];
const copy1 = original.slice();

copy1[0].id = 90;
console.log("copy1", copy1, original);

// 3.3 Using slice() in method chaining
const arr2 = [5, 1, 8, 3, 9]; //output : [1, 8, 3] // [1, 3, 8] // [8, 3, 1]
// const resultChain = arr2.slice(1, 4).sort().reverse();
// console.log("resultChain", resultChain);

const chaining = arr2.slice(1, 4);
console.log(chaining);
const sortArr = chaining.sort();
console.log(sortArr);
const reverseArr = sortArr.reverse();
console.log(reverseArr);

// 4. High-Level Practical Example
// 4.1 Extract the last N items (useful in logs, pagination) // Good question
function getLast(arr, n) {
  return arr.slice(-n);
}
console.log(getLast(["a", "b", "c", "d", "e"], 2)); // ["d", "e"]

// 4.2 Split array into equal-size chunks
function chunkArray(arr, size) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += size) {
    console.log(i, "size", i + size);
    // console.log(i + size);

    resultArr.push(arr.slice(i, i + size));
  }
  return resultArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // output :  [[1,2,3], [4,5,6], [7]]
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // output :  [[1, 2],[3,4], [5, 6],[7]]

function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // handle large k
  console.log(arr.slice(-k));
  console.log(arr.slice(0, -k));

  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]
