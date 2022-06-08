let age = 18;
// number convert to string
age = String(age);
console.log(age);

// string convert to number
age = Number(age);
console.log(age);

// string concatenation
let str1 = "17";
let str2 = "10";

let newStr = +str1 + +str2;
console.log(newStr);
console.log(typeof newStr); // number

// ternary operator
// let stuAge = 4;
let stuAge = 8;
let drink = stuAge >= 5 ? "Coffee" : "milk";
console.log(drink); // coffee

//while loop
console.log("while loop called");
let total = 0;
let i = 0;
while (i <= 10) {
  total = total + i;
  console.log(total, i);
  i++;
}
console.log(total);

//break-continue loop
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i); // 0,1,2
}
console.log("hello break loop");
for (let i = 0; i <= 6; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i); // 4 not render
}
console.log("hello continue loop");
