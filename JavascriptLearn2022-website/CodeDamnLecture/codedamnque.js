//QUE Function to generate random number 
// function randomNumber(min, max) { 
//     return Math.random() * (max - min) + min;
// } 
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)

//QUE Write a program to reverse a string

const string = 'split-by-dash';
const usingSplit = string.split('-');
// [ 'split', 'by', 'dash' ]
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var arr = str.split('', 5);  // with limit
console.log(arr);
//(5) ["A", "B", "C", "D", "E"]

const str = "JavaScript is awesome"
const strArr = str.split(''); //1 string convert to array
[...str] //2 ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'i', 's', ' ', 'a', 'w', 'e', 's', 'o', 'm', 'e']
Array.from(str); //3 ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'i', 's', ' ', 'a', 'w', 'e', 's', 'o', 'm', 'e']
Object.assign([], str)
function reverseAString(str) {
    // write your solution here
    return strArr.reverse();
}

console.log(`Reversed string is: ${reverseAString(str)}`)

function reverse(s) {
    return s.split("").reverse().join("");
}
reverse(str)

const str = "JavaScript is awesome"
const strArr = str.split('');
// undefined
// strArr
// (21) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'i', 's', ' ', 'a', 'w', 'e', 's', 'o', 'm', 'e']
const reverseData = strArr.reverse()
// undefined
// reverseData
// (21) ['e', 'm', 'o', 's', 'e', 'w', 'a', ' ', 's', 'i', ' ', 't', 'p', 'i', 'r', 'c', 'S', 'a', 'v', 'a', 'J']
const joinData = reverseData.join("")
// undefined
// joinData
// 'emosewa si tpircSavaJ'



const str = "JavaScript is awesome"
// undefined
const valueCal = str.split("").reverse().join("");
// undefined
// valueCal
'emosewa si tpircSavaJ'
