//Challange -1, reverse string 
let strVal1 = "Nisha Yadav";
const result = strVal1.split("").reverse().join("")
console.log("result", result);

// function reverseVal(strEle) {
//     let resultReverse = ""
//     for (let i = 1; i <= strEle.length; i++) {
//         resultReverse = resultReverse + strEle[strEle.length - i]
//     }
//     console.log("resultReverse", resultReverse);
//     return resultReverse
// }
// reverseVal(strVal1);
// console.log("reverseVal(strVal1);", reverseVal(strVal1));

// each word split`
// const result1 = strVal1
//   .split(" ")
//   .map((w) => w.split("").reverse().join(""))
//   .join(" ");
// console.log("result1", result1);

//Challange -2 palindrome

let palVal1 = 12321;
// let palVal1 = 1245321;
let palStrVal = palVal1.toString();

function palResult(ele) {
    // let resultPal;
    for (let i = 0; i < ele.length; i++) {
        if (ele[i] != ele[ele.length - (i + 1)]) {
            return false
        }
        //  resultPal = (ele[i] != ele[ele.length - (i + 1)]) ? false : true // will not work
    }
    // return resultPal
    return true
}
console.log("Palindrome Check", palResult(palStrVal));


let arrVal = [1,2,3,4,5]
function reverseValArr(arrEle) {
    let resultReverse = []
    for (let i = 1; i <= arrEle.length; i++) {
        // resultReverse = resultReverse + arrEle[arrEle.length - i]
        resultReverse.push(arrEle[arrEle.length - i]) // 5, 4,3,2,1
    }
    console.log("resultReverse", resultReverse);
    return resultReverse
}
console.log("reverseVal(arrVal);", reverseValArr(arrVal));
