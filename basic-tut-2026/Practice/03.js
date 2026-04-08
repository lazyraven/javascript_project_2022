// find max/min element

let arr = [5, 4, 12, 30, 10, 3, 6, 8]

let maxVal = arr[0];
let minVal = arr[0];

let result;
function findMaxEle() {
    console.log("findMaxEle called");
    for (value of arr) {
        if (value > maxVal) {
            maxVal = value;
        } else if(value < minVal){
            minVal = value;
        }
    }
    console.log("maxVal", maxVal);
    console.log("minVal", minVal);
}
console.log(findMaxEle(arr));
