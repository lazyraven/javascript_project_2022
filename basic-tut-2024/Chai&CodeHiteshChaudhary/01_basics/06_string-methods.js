const name = "nisha";
const repoCount = 50;

//new String, toUpperCase(), toLowerCase(), charAt, indexOf, substring, trim, replace, slice, includes, split, toString, concat, endsWith

console.log(`this is ${name} the repocount is ${repoCount}`);

let gameName = new String("Nisha-Front-Dev"); /// IMPORTANT
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

let newString = gameName.substring(0, 4);
console.log(newString);

let nameOne = "nishayad"; // length = 8
let anotherStr = nameOne.slice(-8, 4);
console.log(anotherStr);

let strOne = "  Nisha    ";
let trimStr = strOne.trim();
console.log(strOne);
console.log(trimStr);

const url = "https://hitesh.com/nisha%20yadav";
console.log(url.replace("%20", "-"));

console.log(url);

console.log(url.includes("nisha"));
console.log(url.includes("abc"));

console.log(gameName.split("-")); // o/p [ 'Nisha', 'Front', 'Dev' ]

// By Nisha
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(s1); // returns the 2 + 2
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf()));

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const strPara = "To be, or not to be, that is the question.";

console.log(strPara.endsWith("question.")); // true
console.log(strPara.endsWith("to be")); // false
console.log(strPara.endsWith("to be", 19)); // true
