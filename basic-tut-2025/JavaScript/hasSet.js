// Create a Set (HashSet-like) | Set = like a HashSet (only unique values, no key-value pairs).
let fruits = new Set();

// Add elements
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
fruits.add("apple"); // duplicate, will be ignored

console.log(fruits); // Set(3) { 'apple', 'banana', 'orange' }

// Check if an element exists
console.log(fruits.has("banana")); // true
console.log(fruits.has("grape")); // false

// Remove an element
fruits.delete("banana");
console.log(fruits); // Set(2) { 'apple', 'orange' }

// Get size
console.log(fruits.size); // 2

// Iterate over Set
for (let fruit of fruits) {
  console.log(fruit);
}

// Clear all values
fruits.clear();
console.log(fruits.size); // 0

// ✅ Real-World Example: Remove Duplicates from an Array
let numbers = [1, 2, 2, 3, 4, 4, 5];

// Use Set to store only unique values
let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers); // Set(5) { 1, 2, 3, 4, 5 }

// Convert Set back to Array
let uniqueArray = [...uniqueNumbers];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
