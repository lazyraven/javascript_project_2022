// hoisted
// var a = 4;

// function greet() {
//     b = "Hello";
//     console.log(b);
//     var b;
// }
// greet();
// console.log(b);

// setInterval, has method

let str = "Javascript";

let newStr = new Set(str);
console.log(newStr.has("a"));
console.log(newStr);
console.log(str);

if (newStr.has("a")) newStr.delete("a");
console.log("one newstr", newStr);
console.log("one str", str);

let iterator = newStr.entries();
console.log("iterator 1", iterator.next().value);
iterator.next().value;
console.log("iterator 2", iterator.next().value);

var st = new Set("JavaScript");
if (st.has("a")) st.delete("a");
var etr = st.entries();
etr.next().value;
console.log("st", st);
console.log("etr.next().value", etr.next().value);
console.log("etr", etr);

let myset = new Set();

myset.add("Chicago");
myset.add("California");
myset.add("London");

// As London exists in the set,
// it will return true
console.log(myset.has("London")); // o/p => true

let students = [
  { id: 5, role: "manager" },
  { id: 3, role: "tester" },
  { id: 2, role: "developer" },
  { id: 1, role: "tester" },
  { id: 4, role: "developer" },
];

const roleComparer = (a, b) => {
  if (a.role.includes("tester") && !b.role.includes("tester")) {
    return -1;
  } else if (b.role.includes("tester") && !a.role.includes("tester")) {
    return 1;
  } else {
    return 0;
  }
};

let users = students.sort(roleComparer);

console.log("users", users);

let num = 5;
for (let i = 0; i < num; i++) {
  setTimeout(console.log("i", i), i * 1000);
}

function print() {
  console.log(a);
  var a = 2;
}
print();
