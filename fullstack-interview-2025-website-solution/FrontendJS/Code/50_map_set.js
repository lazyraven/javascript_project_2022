// Set deduplication
const unique = [...new Set([1, 2, 2, 3])] // [1,2,3]

// Map with object keys
const cache = new Map();
const domEl = document.querySelector("#app");
cache.set(domEl, { clicks: 0 });

// WeakMap — metadata that doesn't prevent GC
const meta = new WeakMap();
function trackObject(obj) {
    meta.set(obj, { created: Date.now() });
}

// When obj is GC'd, the etadata entry is automatically removed