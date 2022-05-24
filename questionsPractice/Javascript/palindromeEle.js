console.log('palindrome file js');

let num = 123;

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

      return true;
    }
  }

  // resultNum.Number();
  // return false;
}

function palindromeElement() {
  palindromeProperty(num);
}
