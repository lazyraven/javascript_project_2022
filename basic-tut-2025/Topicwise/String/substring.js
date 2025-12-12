// 🌱 Easy Example (Beginner)
// Extract a part of a string

const name = "JavaScript"; // output: "Java"
const result = name.substring(0, 4);
console.log("result", result);

// 🌿 Medium Example (Typical Task)
// Get last N characters using substring()

const strText1 = "developer";
const last4 = strText1.substring(str.length - 4);
console.log("last4", last4);

// 🌳 Hard Example (Logic + substring)
// Capitalize the first letter of every word
function capitalizeWords(sentence) {
  console.log(sentence.split(" "));
  console.log(
    sentence
      .split(" ")
      .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
  );
  return sentence.split(" ");
}

console.log(capitalizeWords("hello world from js"));
// "Hello World From Js"
