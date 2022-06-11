console.log('Duplicacy js file');

var arrayList = [1, 2, 3, 4, 2, 4, 6, 5, 3];

function duplicateProperty(data) {
  document.getElementById('originalDupElement').innerText = data;
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    if (!resultArray.includes(data[i])) {
      resultArray.push(data[i]);
    }
  }
  document.getElementById('reverseDupElement').innerText = resultArray;
  // resultArray + ', resultArray length :' + resultArray.length;

  let sortEle = resultArray.sort((a, b) => {
    return b - a;
  });
  document.getElementById('sortDupEle').innerText = sortEle;
}

function duplicateElement() {
  duplicateProperty(arrayList);

  //by ES6 -> shortcut
  let resultArr = new Set(arrayList);
  console.log('new Set', resultArr);
}

//Question 2 “javascript delete second last element of array”

// let spliceArr = [1, 2, 3, 4, 5];
// spliceArr.splice(spliceArr.length - 2);
// delete spliceArr[3];
// console.log(spliceArr);