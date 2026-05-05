// for Loop - // This loop runs from 0 to 2. It’s useful when we know how many times to iterate.
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while Loop - // This loop runs as long as the condition is true.
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// for...of (Array / Iterable) - // for...of gives values directly and is used with arrays, strings, or other iterables.
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

// for...in (Object Keys) - // for...in is used to iterate over object properties (keys).
let obj = { name: "Nisha", role: "Developer" };

for (let key in obj) {
  console.log(key, obj[key]);
}

// Bonus: break and continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
// continue skips an iteration, and break stops the loop completely.