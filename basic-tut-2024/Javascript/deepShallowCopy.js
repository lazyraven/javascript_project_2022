const originalArray = [1, 2, 3, 4];

const copyArray = [...originalArray];
copyArray.push(5);
console.log("NumbersCopy", originalArray, copyArray);
console.log(copyArray == originalArray);

// SWhallow Copy
const original = { name: "Nisha", skills: ["JS", "React"] };
const shallowCopy = { ...original };

shallowCopy.name = "Updated"; // Only updates the copy
shallowCopy.skills.push("Node.js"); // Also affects the original

console.log(original.skills); // ['JS', 'React', 'Node.js']
console.log(shallowCopy.skills); // ['JS', 'React', 'Node.js']

// Deep Copy
const originalA = { name: "Nisha", skills: ["JS", "React"] };
const deepCopy = JSON.parse(JSON.stringify(originalA));

deepCopy.skills.push("Node.js");

console.log(original.skills); // ['JS', 'React']
console.log(deepCopy.skills); // ['JS', 'React', 'Node.js']
