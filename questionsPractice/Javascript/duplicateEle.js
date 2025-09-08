console.log("Duplicacy js file");

var arrayList = [1, 2, 3, 4, 2, 4, 6, 5, 3];

function duplicateProperty(data) {
  document.getElementById("originalDupElement").innerText = data;
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    if (!resultArray.includes(data[i])) {
      resultArray.push(data[i]);
    }
  }
  document.getElementById("reverseDupElement").innerText = resultArray;
  // resultArray + ', resultArray length :' + resultArray.length;

  let sortEle = resultArray.sort((a, b) => {
    return b - a;
  });
  document.getElementById("sortDupEle").innerText = sortEle;
}

function duplicateElement() {
  duplicateProperty(arrayList);

  //by ES6 -> shortcut
  let resultArr = new Set(arrayList);
  console.log("new Set", resultArr);
}

//Question 2 “javascript delete second last element of array”

// let spliceArr = [1, 2, 3, 4, 5];
// spliceArr.splice(spliceArr.length - 2);
// delete spliceArr[3];
// console.log(spliceArr);

const duplicateArr = [1, 2, 2, 14, 6, 7, 8, 6];

function removeDuplicates(arr) {
  console.log("removeDuplicates called", arr);

  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    // check if arr[i] already exists in uniqueArr
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    // if not duplicate, push it
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

// Example usage
console.log(removeDuplicates(duplicateArr));
// Output: [1, 2, 3, 4, 5]
