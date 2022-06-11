console.log("reverse arr js file");

// var arr1 = [1,2,3]
var arr1 = [1, 3, 4, 6, 2, 9, 8, 7, 11, 13, 10, 22, 18];

function reverseArrProperty(data) {
  document.getElementById("originalArrElement").innerText = data;
  let resultArr = [];
  for (let i = 1; i <= data.length; i++) {
    resultArr.push(data[data.length - i]);
    document.getElementById("reverseArrElement").innerText = resultArr;
  }
  // return resultArr;
  console.log(resultArr)
}
function reverseArrayElement() {
  reverseArrProperty(arr1);
}

// second type
//  let arr2 = [];
//  for (let i = data.length - 1; i >= 0; i--) {
//    console.log(data.length, i);
//    arr2.push(data[i]);
//  }

// 3rd type
// for (var i = a.length; i > 0; i--) {
//   rA.push(a[i - 1]);
// }

// 4th type  by UNSHIFT Method array
// arr2 = [];
// arr1.forEach((element) => {
//   console.log("element", element, arr2);
//   arr2.unshift(element);
//   console.log("arr1", arr2);
// });
// console.log(arr1);
