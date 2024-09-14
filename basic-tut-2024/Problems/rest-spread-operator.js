// ES6
// Rest Spread Operator // Technical Suneja

function numbersFn(a, b, ...others) {
  console.log("numFn", a, b, others, others[2]);
  return a + b;
}
let res = numbersFn(8, 9, 2, 5, 3, 7, 4, 9);
console.log("res", res);

// In Array
let names = ["Nisha", "Javascript", "Vue"];
function nameFn(name1, name2, name3) {
  console.log(name1, name2, name3);
}
// let res1 = nameFn(names[0], names[1], names[2]);
// let res1 = nameFn(names);
let res1 = nameFn(...names); // Best way
console.log("res1", res1);

// In Object

let userObj = {
  name: "Nisha",
  rollNo: 101,
  hobbies: ["Cooking", "Sketching", "Painting"],
};

function userDetail(record) {
  console.log("record", record);
}

// Rest in Object
// let resObj = userDetail(userObj)
const rollNumber = userObj.rollNo;

// const { name } = userObj;
// console.log("name", name);

// const { rollNo, ...rest } = userObj;
// console.log(rollNo, rest);

const { ...rest } = userObj;
console.log(rest);

// Spread in Object;

// let newObj = {
//   ...userObj,
// };
// console.log("newObj", newObj);

let newObj = {
  ...userObj,
  rollNo: 204,
};
console.log("newObj", newObj);
