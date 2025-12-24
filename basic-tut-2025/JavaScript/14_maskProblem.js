// Mask Mail : https://chatgpt.com/share/693aeb93-bb68-8013-86c8-28212139b5f6
// Problem 1 — Mask the Email
// Input: "a@b.com"
// Output: "a***@b.com"

// Topics:
// String slicing, finding index of @.

// Solution Example:
function maskEmail(email) {
  console.log("maskEmail called");
  console.log(email.split("@"));
  const [name, domain] = email.split("@");
  const masked = name[0] + "***";
  return masked + "@" + domain;
}
console.log(maskEmail("a@b.com")); // a***@b.com

// Problem 2 — Mask Phone Number

// Rule: Mask all digits except last 4
// Input: "9876543210"
// Output: "******3210"

// Topics:
// String repeat, slice.

// Solution Example:
function maskPhone(phone) {
  console.log("maskPhone called");
  console.log(phone.slice(-4));
  const last4 = phone.slice(-4);
  const masked = "*".repeat(phone.length - 4) + last4;
  return masked;
}
console.log(maskPhone("9876543210"));

// Problem 3 — Mask Credit Card

// Rule: Mask digits except last 4
// Input: "4111111111111111"
// Output: "************1111"

// Topics:
// Length-based masking, immutable return.

// Solution Example:
function maskCard(cardNum) {
  console.log("maskCard called");
  console.log(cardNum.slice(-4));
  const last4 = cardNum.slice(-4);
  const masked = "*".repeat(cardNum.length - 4) + last4;
  return masked;
}
console.log(maskCard("4111111111111111"));
// ************1111

// Problem 4 — Mask All Sensitive Fields in an Object
// Input: {
//   user: {
//     email: "a@b.com",
//     phone: "9876543210",
//     card: "4111111111111111"
//   },
// }
// Output:
// {
//   user:{
//     email:'a***@b.com',
//     phone:'******3210',
//     card:'************1111'
//   }
// }

// Topics:
// Object manipulation, dynamic keys, calling helper functions.

// function maskData(obj) {
//   const result = { ...obj };

//   result.user.email = maskEmail(obj.user.email);
//   result.user.phone = maskPhone(obj.user.phone);
//   result.user.card = maskCard(obj.user.card);

//   return result;
// }

// OR
// Practice Task 4 — Combine All (Object Masking)
function maskData(data) {
  return {
    user: {
      email: maskEmail(data.user.email),
      phone: maskPhone(data.user.phone),
      card: "*".repeat(data.user.card.length - 4) + data.user.card.slice(-4),
    },
  };
}

console.log(
  maskData({
    user: {
      email: "a@b.com",
      phone: "9876543210",
      card: "4111111111111111",
    },
  })
);
