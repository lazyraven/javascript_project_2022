// if/else Example - Here, the condition is checked. If it’s true, the first block runs; otherwise, the else block runs.
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if / else if / else - We use else if when we have multiple conditions to check.
let marks = 75;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 60) {
  console.log("B grade");
} else {
  console.log("C grade");
}

// switch Example
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
// switch checks the value of a variable against multiple cases.
// break is important to stop execution after a match.


// Bonus
let value = 1;

switch (value) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}
// Without break, execution continues to the next case. This is called fall-through.
