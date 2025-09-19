console.log(
  "------------------------- DEEP CLONE OBJECT ------------------------"
);

// const clone = structuredClone(obj);

// ES6 VERSION > enhanced deep clone function that supports Object, Array, Date, RegExp, Map, and Set:
const deepClone = (val, wm = new WeakMap()) => {
  // Handle primitives
  if (val === null || typeof val !== "object") return val;

  // Prevent circular reference issues
  if (wm.has(val)) return wm.get(val);

  const C = val.constructor;
  const clone =
    C === Map
      ? new Map()
      : C === Set
      ? new Set()
      : C === Date
      ? new Date(val)
      : C === RegExp
      ? new RegExp(val)
      : Array.isArray(val)
      ? []
      : {};

  wm.set(val, clone);

  if (C === Map)
    val.forEach((v, k) => clone.set(deepClone(k, wm), deepClone(v, wm)));
  else if (C === Set) val.forEach((v) => clone.add(deepClone(v, wm)));
  else Object.keys(val).forEach((k) => (clone[k] = deepClone(val[k], wm)));

  return clone;
};

const original = {
  name: "Nisha",
  hobbies: ["painting", "coding"],
  details: { joined: new Date("2023-01-01") },
  tags: new Set(["dev", "artist"]),
  settings: new Map([["theme", "dark"]]),
};

// Clone it
const copy = deepClone(original);

// Modify clone
copy.hobbies.push("dancing");
copy.settings.set("theme", "light");

console.log("Original:", original);
console.log("Clone:", copy);

// Ex : 2
// Example object with various types
const originalOne = {
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
const copyOne = deepClone(originalOne);

// Test mutations
copyOne.hobbies.push("dancing");
copyOne.details.joined.setFullYear(2025);
copyOne.tags.add("learner");
copyOne.settings.set("theme", "light");

console.log("originalOne:", originalOne);
console.log("Clone:", copy);

// other modern way
// deep shaloow copy
const original1 = { name: "Nisha", skills: ["JS", "React"] };

const clone = structuredClone(original1);
console.log("clone", clone);

clone.name = "Yadav";
console.log("clone", clone);
console.log("original1", original1);
