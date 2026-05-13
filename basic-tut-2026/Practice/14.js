
// Count vowels in a string
// Input: "hello world"
// Output: 3  // e, o, o

// ----- START ---
// Method 3 - preferred in interviews because it clearly shows problem-solving logic.
// Improved version:

// O(n) time
// O(1) extra space
// Another Professional Alternative

// Using regex:

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

// Explanation:

// /[aeiou]/gi
// g → global search
// i → case-insensitive
// match() returns matched vowels
// || [] prevents errors when no vowels exist

// This is concise, but your loop-based approach is usually better for learning and interviews because it shows logic clearly.
// ----- END -----

// ----- START ---
// Method 2  - Your Set solution is one of the best standard approaches in JavaScript.
// function countVowels(str) {
//     const vowels = new Set(['a','e','i','o','u']);

//     let count = 0
//     for (const char of str.toLowerCase()) {
//         if (vowels.has(char)) count++
//         }
//     return count;
// }
// Time: O(n) | Space: O(1)
// ----- END ---

// ----- START ---
// Method 1
// function countVowels(str){
//     const vowels = "aeiou"
// // const result = []
// let count = 0;
// for(const char of str.toLowerCase()){
//     if(vowels.includes(char)){
//         // result.push(char);
//         count++;
//     }
// }
// // return result.length;
// return count
// }

// You don't actually need to store vowels in an array if you only want the count.
// You push vowels into it and later return:
// This uses extra memory unnecessarily.

        // This is usually the preferred interview-style solution.

        // Time Complexity

        // Your approach:

        // O(n) time
        // O(k) extra space for storing vowels found

        // Improved version: go to Method 3

        // O(n) time
        // O(1) extra space
// ----- END ---

console.log(countVowels("hello world"));
console.log(countVowels("JavaScript"));
console.log(countVowels("rhythm")); 
console.log(countVowels("AEIOU")); 




