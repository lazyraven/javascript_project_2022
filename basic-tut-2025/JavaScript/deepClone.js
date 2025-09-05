// const clone = structuredClone(obj);
// const cloneJson = JSON.parse(JSON.stringify(obj));
// const cloneLodash = __.cloneDeep(obj);

// https://chatgpt.com/c/68ba59b0-66cc-8326-8c33-b8faef83c3ae

// Works with ES modules (import/export)
// <script type="module" src="../JavaScript/deepCloneCommonComponent.js"></script>
// import { deepClone } from "./deepCloneCommonComponent.js";

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
