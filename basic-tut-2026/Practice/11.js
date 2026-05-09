// Problem 5: Count Occurrences of Each Element
// Input: [1,2,2,3,1,1]
// Output: {1:3, 2:2, 3:1}

// Input: ["a","b","a","c","b","a"]
// Output: {a:3, b:2, c:1}

// Input: []
// Output: {}


// Method 1
// Beginner-Friendly Solution
// Approach
// Create an empty object
// Loop through array
// Check if element exists in object
// Increment count
// Otherwise initialize with 1

function countOccurrences(arr) {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }
  return frequency;
}
console.log(countOccurrences([1, 2, 2, 3, 1, 1]));

// Method 3
// Using Map (Best for Advanced Cases)
// Objects convert keys to strings.

// Map is better when:
// Keys can be objects
// Mixed data types exist
// Better performance consistency is needed

// function countOccurrences(arr) {
//     const map = new Map();
  
//     for (const item of arr) {
//       map.set(item, (map.get(item) || 0) + 1);
//     }
  
//     return map;
//   }
  
//  console.log(countOccurrences([1, 2, 2]));

// For Map
    // 7. Time and Space Complexity
    // Object Solution
    // Time Complexity

    // T(n)=O(n)

    // Because we traverse the array once.

    // Space Complexity

    // S(n)=O(k)

    // Where:

    // k = number of unique elements

    // Worst case:

    // [1,2,3,4,5]

    // All unique.

    // So space becomes:

    // O(n)


// Method 2
// Optimized Approach
// The Method 1 solution is already efficient.
// But we can write cleaner modern JavaScript using:
// for...of
// Short-circuit logic

// function countOccurences(arr) {
//   const count = {}
//   for(const num of arr){
//     count[num] = (count[num] || 0) + 1
//   }
//   return count
// }
// console.log(countOccurences([1, 2, 2, 3, 1, 1]));

// Important Note:
// Method 1 is good for this answer:
// Expected output in the problem: {1:3, 2:2, 3:1}

// Your function returns:
// Map(3) { 1 => 3, 2 => 2, 3 => 1 }

// If You Want Exact Object Output
// You can use a plain object:

// Professional Insight :

// Map
// Better when:

// keys can be any datatype
// large datasets
// better performance features

// Object {}
// Better when:

// simple JSON-style output needed
// interview beginner problems
// API responses

// So your Map solution is actually more advanced.


// O(n2) - Avoid this for counting problems.
// to use Using Nested Loops - bad approach
// Mistake 1: Forgetting Initialization - frequency
// frequency[item]++;
// undefined + 1
// so initialize :   const frequency = {};