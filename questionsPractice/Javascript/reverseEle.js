console.log('reverse js file');

var name = 'Nisha Yadav';

function reverseProperty(data) {
  document.getElementById('originalRevElement').innerText = data;
  let reverseTerm = '';
  for (let i = 1; i <= data.length; i++) {
    if (i <= data.length) {
      reverseTerm = reverseTerm + data[data.length - i];
      document.getElementById('reverseRevElement').innerText = reverseTerm;
    }
  }

  // space not include
  let reverseWithOutSpace = reverseTerm.split(' ').reverse().join(' ');
  document.getElementById('reverseWithOutSpaceEle').innerText =
    reverseWithOutSpace;
}

function reverseElement() {
  reverseProperty(name);
}
