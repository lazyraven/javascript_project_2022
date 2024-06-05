// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



const emptyObj = {}

// if (Object.values(emptyObj).length === 0) {
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// By Nisha
// val1 = "" ?? 15
// val1 = [1, 2, 3] ?? 15
// val1 = "Nisha" ?? 15
// val1 = true ?? 15
// val1 = null ?? "Nisha Yadav"

console.log(false=="");
console.log(false==" ");
console.log(false=="ABC");


console.log(false==="");
console.log(false===" ");



