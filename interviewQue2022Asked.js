// var num = 123
// let str = num.toString(num);

var num1 = 123
var str1 = num1.toString();

function startFunction(strValue) {
    let strNum = ""
    for (let i = 1; i <= strValue.length; i++) {
        strNum = strNum + strValue[strValue.length - i];

    }
    return Number(strNum);
}
startFunction(str1);

console.log("startFunction(str1)", startFunction(str1));

let arrElements = [1, 2, 3, 5]

function sumElements(arrVal) {
    let sum = 0
    for (let i = 0; i < arrVal.length; i++) {
        sum = sum + arrVal[i]
    }
    return sum
}
sumElements(arrElements);

console.log("startFunction(str1)", sumElements(arrElements));

var a;

var b = ""
/// Synapse ////

//     < template >
//     <div>

//         <input type="text" v-model="fullNamefName" />

//     </div>

// </template >

//     <script>
//         export default{

//             data(){
// return{
//             fullName:{fName:"Nisha", lName: "Yadav"};
// }
// }

// }

//     </script>


// Vipin Rai1: 51 PM
// Q1
function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
typeof a; // => ???
typeof b; // => ???

console.log("type", typeof a, typeof b);

// Q2
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
clothes[0];
console.log("clothes[0];", clothes[0]);

// Q3
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++); {
    numbers.push(i + 1);
}
numbers;

console.log("numbers", numbers);
// Q4
0.1 + 0.2 === 0.3

console.log("0.1 + 0.2 === 0.3", 0.1 + 0.2, 0.1 + 0.2 === 0.3);

