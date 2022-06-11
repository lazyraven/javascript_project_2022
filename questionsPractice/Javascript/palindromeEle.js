console.log('palindrome file js');

// let num = 123;
let num = 122;


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
