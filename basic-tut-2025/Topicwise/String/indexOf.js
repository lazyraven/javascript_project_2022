// ✔ Returns the starting index
// ❌ Returns -1 if not found

// 1️⃣ Easy Level — Basics
// Example 1: Find position in a string
const str = "JavaScript is awesome"; // 4
const result = str.indexOf("Script");
console.log("result", result);

const word = "hello"; // 1
const wordResult = word.indexOf("e");
console.log("wordResult", wordResult);

const arr = ["apple", "banana", "mango"]; // 1
const arrResult = arr.indexOf("banana");
console.log("arrResult", arrResult);

// How do you check if a string contains another string? 
function contains(str, value) {
    // const result = str.indexOf(value);
    // return result;
    if (str.indexOf(value) !== -1) {
        return true;
    }
    return false
}
console.log(contains("Frontend Developer", "Developer")); // true
console.log(contains("Frontend Developer", "ABCDeveloper")); // false


// Case-insensitive search
function findWord(str, value) {
    const res1 = str.toLowerCase();
    const res2 = value.toLowerCase();
    if (res1.indexOf(res2) !== -1) {
        return true;
    }
    return false

}
console.log("findWord", findWord("I Love JavaScript", "javascript")); // true

// Find all occurrences

function findAllIndexes(str, value) {
    const result = [];
    let index = str.indexOf(value);
    console.log("index", index);
    while (index!== -1) {
        result.push(index);
        index = str.indexOf(value, index + 1)
    }
    console.log(result);
    return result

}
console.log(findAllIndexes("banana", "a")); // [1, 3, 5]
