// 🌱 Easy Example
// Split a sentence into words: // ["JavaScript", "is", "fun"]

const sentence = "JavaScript is fun";
console.log(sentence.split(" "));

// 🌿 Medium Example
// Split CSV-style data:

const testStr = "Nisha,Developer,India"; // // ["Nisha", "Developer", "India"]
console.log(testStr.split(","));

// 🌳 Hard Example
// Split with a limit and remove empty items:
const testStr1 = "one,,two,,,three";
console.log(testStr1.split(","));

const cleaned = testStr1.split(",").filter(Boolean);
console.log("cleaned", cleaned);

// Extract domain from email
// Tests regex + split thinking.
function getDomain(ele) {
  const result = ele.split("@")[1]; // 1 > index
  //   const result = ele.split("@")[0]; // 0 > index
  console.log("result", result);
}
console.log(getDomain("nisha@example.com"));

// 4️⃣ Turn a URL query string into an object
// Common interview task.

function parseQuery(query) {
  const result = {};

  query.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    result[key] = value;
  });

  return result;
}
console.log(parseQuery("name=John&age=25"));
// { name: "John", age: "25" }

// 5️⃣ Convert a sentence to URL slug
// Used in SEO, blogging platforms, CMS.

function toSlug(str) {
  return str.toLowerCase().split(" ").filter(Boolean).join("-");
}

console.log(toSlug("Hello World from JS"));
// "hello-world-from-js"
