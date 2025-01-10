let numbers = [1, 2, 6, 8, 3, 7, 2, 1, 3, 8, 6];

function getUniqueValue(records) {
  console.log("getUniqueValue called");
  let result = "";
  for (let i = 1; i <= records.length; i++) {
    if (records[i] != records.includes(result)) {
      result = records[i];
    }
    // result += records[records.length - i];
    // console.log("result", result);
  }
  console.log("result", result);
}

getUniqueValue(numbers);
