// move zero to end.
let arr = [4, 0, 0, 3, 5, 0, 9, 0, 2, 6]
// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let nonZeroEle = [];
let zeroEle = [];
let result = [];

function moveZeroToEnd() {
    for (value of arr) {
     value !== 0 ? nonZeroEle.push(value) : zeroEle.push(value)
        // if (value !== 0) {
        //     nonZeroEle.push(value);
        // } else {
        //     zeroEle.push(value);
        // }
    }
    console.log("nonZeroEle", nonZeroEle);
    console.log("zeroEle", zeroEle);

    result = [...nonZeroEle, ...zeroEle];
    console.log("result", result);
    return result;
}
console.log(moveZeroToEnd(arr));