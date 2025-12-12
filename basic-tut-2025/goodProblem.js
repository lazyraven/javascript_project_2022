// 🌳 Hard Example (Logic + substring)
// Capitalize the first letter of every word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1));
}

console.log(
  "capitalizeWords first word",
  capitalizeWords("hello world from js")
);

// 4.2 Split array into equal-size chunks
function chunkArray(arr, size) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += size) {
    resultArr.push(arr.slice(i, i + size));
  }
  return resultArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
