// Validation proxy
function createValidator(target, rules) {
  return new Proxy(target, {
    set(obj, prop, value) {
      if (rules[prop] && !rules[prop](value)) {
        throw new TypeError(`Invalid value for ${prop}`);
      }
      return Reflect.set(obj, prop, value);
    }
  });
}

const user = createValidator({}, {
  age: v => typeof v === "number" && v >= 0
});
user.age = 25;   // ✓
// user.age = -1;  // TypeError