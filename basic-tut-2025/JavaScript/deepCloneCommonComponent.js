// Works with ES modules (import/export) > add type="module" in script
// <script type="module" src="app.js"></script>

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

export default deepClone;
