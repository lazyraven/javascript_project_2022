//average scores.
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}
console.log("getAverage called");
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// 92+ 88+ 12+ 77+ 57+ 100+ 67+ 38+ 97+ 89
// 45+ 87+ 98+ 100+ 86+ 94+ 67+ 88+ 94+ 95

function getAdditionArrForLoop(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    // console.log("index", i, scores[i]);
    total = total + scores[i];
  }
  console.log("getAdditionArrForLoop", total);
  return total;
}
console.log(getAdditionArrForLoop([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAdditionArrForLoop([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//Nisha => Addition by reduce method
function getAdditionByReduce(scores) {
  const result = scores.reduce((acc, total) => {
    acc = acc + total;
    return acc;
  }, 0);
  console.log("getAdditionByReduce", result);
  return result;
}
console.log(getAdditionByReduce([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAdditionByReduce([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
