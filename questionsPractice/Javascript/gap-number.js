console.log("number,find,gap");

//20 hide how find which number is missing
// let array1 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23,
//   24, 25,
// ];
let array1 = [1, 2, 3, 4, 5, 7, 8];

console.log(array1.length);

// Forth type
function missingNumber(ele) {
  for (let i = 1; i < ele.length; i++) {
    if (ele[i] != ele[i - 1] + 1) {
      console.log(true, "findMissingEle called", ele[i], ele[i - 1] + 1);
      return true;
    }
  }
  console.log(false);
  return false;
}
missingNumber(array1);

// Third Type -> V-Good
//   function missingNumber(ele) {
//   let initialEle = ele[0];

//   for (let i = 0; i < ele.length; i++) {
//     console.log(ele[i]);
//     if (ele[i] != i + initialEle) {
//       console.log(true, initialEle, i, i + initialEle, ele[i]);
//       return true;
//     }
//   }
//   console.log(false);
//   return false;
//   missingNumber(array1);

// Second Type -> Good
// function missingNumber(ele) {
//   let initialEle = ele[0];
//   for (let i = 0; i <= ele.length; i++) {
//     if (ele[i] - initialEle == 1) {
//       initialEle = ele[i];
//     }
//   }
//   let findMissingEle = initialEle + 1;
//   console.log("findMissingEle called", findMissingEle);
// }
// missingNumber(array1);

// First Type
// function missingNumber(ele) {
//   let initialEle = ele[0];
//   let resultData = [];
//   for (let i = 0; i <= ele.length; i++) {
//     if (ele[i] - initialEle == 1) {
//       initialEle = ele[i];
//       resultData.push(initialEle);
//     }
//   }
//   console.log("initialEle out called", initialEle + 1);
//   console.log("resultData called", resultData);
// }
// missingNumber(array1);

// by find method ->> not working

// function missingNumber(eleArr) {
//     let initialEle = eleArr[0];
//     let result = eleArr.every((ele) => {
//       console.log(ele);
//       return ele - initialEle == 2;
//     });
//     console.log("result called", initialEle + 1, result);
//   }
//   missingNumber(array1)

// ROUGHLY
// (nextEle - preEle) = 1;

// let result = [];
// let initialEle = array1[0];

// array[1] - array[0] == 1;

// array[i] - initialEle == 1;
// initialEle = array[i];

// resultData.push(array[i])

// initialEle = array1[i];
// nextEle = array[i];

// array1.forEach((element) => {
//   console.log(element);
//   if (element[]) {
//   }
// });
