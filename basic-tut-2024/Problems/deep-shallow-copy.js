let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

// let newEmployee = employee;
// console.log("newEmployee", newEmployee);
// console.log("employee", employee);

// Two
// newEmployee["eaddress"] = "India";

// console.log("newEmployee", newEmployee);
// console.log("employee", employee);

let newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee["eaddress"] = "India";

console.log("newEmployee", newEmployee);
console.log("employee", employee);
