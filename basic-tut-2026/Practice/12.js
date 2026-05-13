// Count characters in a string
// Input: "hello"
// Output: { h:1, e:1, l:2, o:1 }

// Input: "aabbcc"
// Output: { a:2, b:2, c:2 }

// Input: "aab"
// Output: { a:2, b:1 }

// Input: "JavaScript"
// Output: {"J": 1, "a": 2,"v": 1, "S": 1, "c": 1, "r": 1,"i": 1, "p": 1,"t": 1}

// Input: "12345"
// Output: { "1": 1, "2": 1,"3": 1,"4": 1,"5": 1}

// Input: ""
// Output: {}

function countCharacter(str) {
   // // const convertInArr = str.split("") // no need of split because using for of loop
    const frequency = {};
    for (const char of str) {
        // if (frequency[char]) {
        //     frequency[char]++
        // } else {
        //     frequency[char] = 1;
        // }
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }
  return frequency;
}
console.log(countCharacter("hello"));
console.log(countCharacter("aabbcc"));
console.log(countCharacter("aab"));
console.log(countCharacter("12345"));
console.log(countCharacter("JavaScript"));
console.log(countCharacter(""));

// -----
// function charCount(s) {
//     const freq = {};
//     for (const ch of s) {
//       if (ch !== ' ')
//         freq[ch] = (freq[ch] || 0) + 1;
//     }
//     return freq;
//   }
// Time: O(n) | Space: O(k) — k = unique chars
//   ----


// You can make it even shorter using a ternary operator:

// for (const char of str) {
//     frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
// }

// Or the most modern concise approach:
// function countCharacter(str) {
//     return [...str].reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});
// }