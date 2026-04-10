// remove negative(-ve) numbers

let arr = [-2, 3, 5, -6, 8];

// const result = arr.filter((item)=>item >= 0)
// console.log("result", result);

function removeNegEle(elements) {
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] >= 0) {
            result.push(elements[i]);
        } 
    }
    return result;
}
console.log(removeNegEle(arr));
