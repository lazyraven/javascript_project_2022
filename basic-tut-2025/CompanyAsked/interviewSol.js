// HCL_React+Node - // Forth Interview

// Que2:the value is integer or not ?
function isInteger(value) {
  if (!isNaN(value)) {
    return true;
  }
  return false;
}
console.log(isInteger(4));
console.log(isInteger("JS"));
// Que1:

// This is a currying problem in JavaScript.
// You want a function that can be called repeatedly and finally returns the product.

function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(mul(2)(3)(4)); // 24
console.log(mul(4)(2)(4)); // 32;

//              OR;
// If you want it to work for any number of arguments:
function mul(x) {
  let result = x;

  return function next(y) {
    if (y === undefined) return result;
    result *= y;
    return next;
  };
}
console.log(mul(2)(3)(4)()); // 24

// Capgemini — React / JS / Node  - // Third Interview
// Que 2:
const input = {
  user: { email: "a@b.com", phone: "9876543210", card: "4111111111111111" },
};
// Output: { user:{ email:'a***@b.com', phone:'******3210', card:'************1111' } }

// Mask email
function maskEmail(email) {
  const [name, domain] = email.split("@");
  const maskedName = name[0] + "***";
  return maskedName + "@" + domain;
}

// Mask phone (show last 4 digits)
function maskPhone(phone) {
  return "*".repeat(phone.length - 4) + phone.slice(-4);
}

// Mask card (show last 4 digits)
function maskCard(card) {
  return "*".repeat(card.length - 4) + card.slice(-4);
}

const output = {
  user: {
    email: maskEmail(input.user.email),
    phone: maskPhone(input.user.phone),
    card: maskCard(input.user.card),
  },
};

// Que 1:
console.log(output);
const arrayVal = [
  { dept: "Eng", sal: 10 },
  { dept: "HR", sal: 5 },
  { dept: "Eng", sal: 20 },
];
// Output : {  Eng: { count: 2, sum: 30, avg: 15 },HR: { count: 1, sum: 5, avg: 5 } }

const result = arrayVal.reduce((acc, item) => {
  const { dept, sal } = item;

  if (!acc[dept]) {
    acc[dept] = { count: 0, sum: 0, avg: 0 };
  }

  acc[dept].count += 1;
  acc[dept].sum += sal;
  acc[dept].avg = acc[dept].sum / acc[dept].count;

  return acc;
}, {});

console.log(result);

// TCS Interview //  Second Interview
// Que 2:
let str = "Hello World"; // "olleH dlroW."
let resultValue =
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ") + ".";
console.log(resultValue); // "olleH dlroW."

// Que 1:
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
