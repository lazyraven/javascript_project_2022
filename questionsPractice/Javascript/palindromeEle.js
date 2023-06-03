console.log('palindrome file js');


let paldNum = 23432
// let paldNum = 23431

// let strNum = String(paldNum)
let strNum = paldNum.toString()

console.log("steNum called", strNum)

function paldFun(ele) {
  for (let i = 0; i < ele.length; i++) {
    if (ele[i] != ele[ele.length - (i + 1)]) {
      // 2(0)    2(4) (5-(0+1))
      // 2(1)    2(3) (5-(1+1))
      // 2(2)    2(2) (5-(2+1))
      console.log("no")
      return false
    }
  }
  console.log("palyes", "yes")
  return true
}
paldFun(strNum)

// let number = 1231;
let number = 12321;
//negative
function showData(data) {
  let num = data.toString();
  console.log("num", num);

  for (let i = 0; i < num.length; i++) {
    console.log(num[i], num[num.length - (i + 1)]);

    if (num[i] != num[num.length - (i + 1)]) {
      console.log('no');
      return false;
    }
  }
  console.log('yes');
  return true;
}

showData(number);


// let num = 123;
let num = 122;
function palindromeProperty(data) {
  document.getElementById('originalPaldElement').innerText = data;
  let resultNum = toString(data);

  if (resultNum) {
    for (let i = 0; i < resultNum.length; i++) {
      if (!Number(resultNum[resultNum.length - i]) == Number(resultNum[i])) {
        document.getElementById('reversePalElement').innerText = true;
      } else {
        document.getElementById('reversePalElement').innerText = false;
      }
      console.log('resultNum');
      document.getElementById('reversePalElement').innerText = true;

      return false;
    }
  }

  // resultNum.Number();
  // return false;
}


function palindromeElement() {
  palindromeProperty(num);
}






// function palindrome(str) {

//   var len = str.length;
//   var mid = Math.floor(len / 2);

//   for (var i = 0; i < mid; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }
// palindrome(num)


