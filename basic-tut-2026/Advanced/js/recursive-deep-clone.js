
// One
// ✅ Works for nested objects and arrays.
// ⚠️ Doesn’t handle special types (Date, Map, Set, RegExp, functions).
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// Two
// an enhanced deep clone function that supports :individual test cases
// Object, Array, Date, RegExp, Map, and Set: >https://chatgpt.com/share/6a702e15-76f4-83e9-be49-1d3ee8d2cf14
// ✅ Supports circular references
// ✅ Handles complex types
// ⚠️ Still doesn’t clone functions (normally functions aren’t cloned, just referenced).

function deepClone(value, weakMap = new WeakMap()) {
  // Handle primitives
  if (value === null || typeof value !== "object") return value;

  // Prevent circular reference issues
  if (weakMap.has(value)) return weakMap.get(value);

  // Handle Date
  if (value instanceof Date) return new Date(value);

  // Handle RegExp
  if (value instanceof RegExp) return new RegExp(value);

  // Handle Map
  if (value instanceof Map) {
    const result = new Map();
    weakMap.set(value, result);
    value.forEach((v, k) => result.set(deepClone(k, weakMap), deepClone(v, weakMap)));
    return result;
  }

  // Handle Set
  if (value instanceof Set) {
    const result = new Set();
    weakMap.set(value, result);
    value.forEach(v => result.add(deepClone(v, weakMap)));
    return result;
  }

  // Handle Array
  if (Array.isArray(value)) {
    const result = [];
    weakMap.set(value, result);
    value.forEach((v, i) => result[i] = deepClone(v, weakMap));
    return result;
  }

  // Handle Object
  const result = {};
  weakMap.set(value, result);
  Object.keys(value).forEach(k => result[k] = deepClone(value[k], weakMap));
  return result;
}

// Three
// shorter ES6+ version of the deep clone (still handles Date, RegExp, Map, Set, arrays, objects, and circular references):
// production-safe.

// deepClone.js
const deepClone = (val, wm = new WeakMap()) => {
  if (val === null || typeof val !== "object") return val;
  if (wm.has(val)) return wm.get(val);

  const C = val.constructor;
  const clone = C === Map ? new Map() :
                C === Set ? new Set() :
                C === Date ? new Date(val) :
                C === RegExp ? new RegExp(val) :
                Array.isArray(val) ? [] : {};

  wm.set(val, clone);

  if (C === Map) val.forEach((v, k) => clone.set(deepClone(k, wm), deepClone(v, wm)));
  else if (C === Set) val.forEach(v => clone.add(deepClone(v, wm)));
  else Object.keys(val).forEach(k => clone[k] = deepClone(val[k], wm));

  return clone;
};
export default deepClone;

// Four
// Example object with various types
const original = {
  name: "Nisha",
  age: 25,
  hobbies: ["painting", "coding"],
  details: {
    active: true,
    joined: new Date("2023-01-01"),
  },
  tags: new Set(["dev", "artist"]),
  settings: new Map([
    ["theme", "dark"],
    ["lang", "es"],
  ]),
  regex: /hello/gi,
};

// Clone it
const copy = deepClone(original);

// Test mutations
copy.hobbies.push("dancing");
copy.details.joined.setFullYear(2025);
copy.tags.add("learner");
copy.settings.set("theme", "light");

console.log("Original:", original);
console.log("Clone:", copy);


// Five : circular reference test with the same deepClone function
const obj = { name: "circle" };
obj.self = obj; // circular reference

const copy = deepClone(obj);

console.log(copy);
console.log(copy.self === copy); // true ✅
console.log(copy.self === obj);  // false ✅ (not referencing original)