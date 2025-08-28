const numberList = [12, 34, 24, 22, 18, 88, 45, 98, 10, 7];

function maxNumberFind(value) {
  let maxValue = value[0];
  for (let i = 1; i < value.length; i++) {
    if (value[i] > maxValue) {
      maxValue = value[i];
    }
  }
  //   OR
  //   const maxValue = Math.max(...value);
  console.log(maxValue);
  return maxValue;
}
console.log(maxNumberFind(numberList));
