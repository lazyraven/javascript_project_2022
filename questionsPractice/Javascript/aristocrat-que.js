console.log("script render");
// Question 1
// let number = 5;
// for (let i = 0; i < number; i++) {
//   setTimeout(console.log(i), i * 1000);
//   console.log(i);
// }

// function callBack(num) {
//   console.log("callBack called");
//   for (let i = 0; i < num; i++) {
//     // setTimeout(console.log(i), i * 1000);
//     console.log(i);
//   }
// }
// callBack(number);

// Question 2
let sum = 2.1;
function sumVal() {
  console.log("sumVal called");
  sum = sum + 3.8 + 0.1;
  console.log("sum value", sum);
  console.log("6.0");
}
sumVal(sum); // output -> 6, 6.0

// Question 3
let arr = [1, 0, 1, 0, 0, 1, 0, 1];

arr.sort((a, b) => {
  return a - b;
});
console.log("sort array", arr); // [0, 0, 0, 0, 1, 1, 1, 1]

// Question 4
var st = new Set("JavaScript");
if (st.has("a")) st.delete("a");
var etr = st.entries();
etr.next().value;
console.log("st", st);
console.log("etr.next().value", etr.next().value);
console.log("etr", etr);

// Question 5
// Input: aabbc;
// abaacb;
// aabbca;
// Output: ababc;
// abaacb;
// ababaca;

//   Question 6
// function created sortedStudent(students, sortOrder){}
// Expected output : // let students = [
//     {id:1, role: 'tester'},
//     {id:2, role: 'developer'},
//     {id:3, role: 'tester'},
//     {id:4, role: 'developer'},
//     {id:5, role: 'manager'},
// ]

// var sortOrder = ["tester", "developer", "manager"];

let students = [
  { id: 5, role: "manager" },
  { id: 3, role: "tester" },
  { id: 2, role: "developer" },
  { id: 1, role: "tester" },
  { id: 4, role: "developer" },
];

// let resultArray = students.sort((a, b) => {
//   return b.role - a.role;
// });
// console.log("resultArray called", students, resultArray);

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
