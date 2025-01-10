// for this example you can take as a callback also help from 12-callback.js file

// let name = "Javascript";
let name = "Nisha Yadav";

// Method 1
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log("reverseTerm called", reversed);
  return reversed;
}
reverse(name);

let arrayEle = [2, 3, 4, 8, 5, 0, 6, 2];
let arrayEleTwo = [1, 3, 4, 6, 2, 9, 8, 7, 11, 13, 10, 22, 18];

let arrayEleThree = [
  { productName: "SketchBook", count: "10" },
  { productName: "Sketch Brush", count: "2" },
  { productName: "Sketch Palette", count: "2" },
  { productName: "Water Colour", count: "1" },
];

function reverseArray(records) {
  let resultArr = [];
  // for (let i = 1; i <= records.length; i++) {
  //   resultArr.push(records[records.length - i]);
  // }
  // console.log("resultArr", resultArr);

  // Method 2 // take help from array-reverse-ele.js file
  records.forEach((element) => {
    resultArr.unshift(element);
  });
  console.log("resultArr", resultArr);

  // Method 3 - output will return in a string, only first to array will give the result, last array object will not return the result correctly
  // resultArr = records.reverse().join(",");
  // console.log("resultArr 1", resultArr, typeof resultArr);

  // let splitToArray = resultArr.split(","); // string convert into the array
  // console.log("splitToArray", splitToArray, typeof splitToArray);
}
reverseArray(arrayEle);
reverseArray(arrayEleTwo);
reverseArray(arrayEleThree);

// callback explain with this example reverse element

function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullname = `${name} yadav fullname`;
  //   console.log(fullname);
  cb(fullname);
}
handleName("nisha", makeUppercase);
handleName("nisha", reverseString);

// Reverse an array using Map

let numbers = [1, 2, 3, 4, 5, 6];
function reverseArrayUsingMap(array) {
  const lastIndex = array.length - 1;

  const result = array.map((item, i, arr) => {
    return arr[lastIndex - i];
  });
  console.log("result", result);
}
reverseArrayUsingMap(numbers);

// Method 2

// console.log(name.split(""));
// console.log(name.split("").reverse());
// console.log(name.split("").reverse().join(""));
// console.log(name.split("").reverse().join(""));

// console.log("result", result); //Output : vadaY ahsiN

// // Note : Different case without consider space
// let reverseWithOutSpace = result.split(" ").reverse().join(" ");
// console.log("reverseWithOutSpace", reverseWithOutSpace); // Output :ahsiN vadaY

// Method 3

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

// Method 4

// function reverseElement(ele) {
//   let reverseTerm = "";
//   for (let i = 1; i <= ele.length; i++) {
//     reverseTerm = reverseTerm + ele[ele.length - i];
//   }
//   console.log("reverseTerm called", reverseTerm);
// }
// reverseElement(name);
