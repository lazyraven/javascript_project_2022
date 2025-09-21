console.log(
  "------------------------- REMOVE DUPLICATE RESULT ------------------------"
);

const duplicateArr = [1, 2, 2, 14, 6, 7, 8, 6];

function duplicateRemove(ele) {
  console.log("duplicateRemove called", ele);
  let result = [];
  for (let i = 0; i < ele.length; i++) {
    if (!result.includes(ele[i])) {
      result.push(ele[i]);
    }
  }
  return result;
}
console.log(duplicateRemove(duplicateArr));
