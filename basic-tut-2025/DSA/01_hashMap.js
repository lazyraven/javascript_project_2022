console.log("DSA Hashmap understanding !!");
// file:///C:/workspace-nisha/01_github/09_DSA/2025_DSA/Array/array_basics_coding_sheet.html

// Create a Map
let studentAges = new Map();

// Insert values
studentAges.set("Alice", 20);
studentAges.set("Jane", 18);

// Access values
console.log(".get", studentAges.get("Jane"));

// Update value
studentAges.set("Alice", 30);

// Check if key exists
console.log(".has", studentAges.has("Alice"));

// Delete a key
studentAges.delete("Jane");

// Check size of the map
console.log("Map Size", studentAges.size);

console.log("studentAges called", studentAges);

// Iterate over keys and values
// studentAges.forEach((age, name) => {
//   console.log(name, "is", age, "years old.");
// });

// OR

for (const [age, name] of studentAges) {
  console.log(`${age}: ${name}`);
}

// Example 2 : real-world problem: counting how many times each word appears in a sentence.
// ✅ Example: Word Frequency Counter using Map

function wordFrequency(text) {
  // Split text into words (lowercase for consistency)
  let words = text.toLowerCase().split(" ");
  console.log("words", words);

  // Create a HashMap (Map)
  let freqMap = new Map();

  // Count each word
  for (let word of words) {
    if (freqMap.has(word)) {
      freqMap.set(word, freqMap.get(word) + 1);
    } else {
      freqMap.set(word, 1);
    }
  }

  return freqMap;
}

// Example usage:
let sentence = "JavaScript is fun and JavaScript is powerful";
let result = wordFrequency(sentence);

console.log("result", result);

// Print results
result.forEach((count, word) => {
  console.log(`${word} → ${count}`);
});
