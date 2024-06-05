// stack (primitive) heap(non-primitive)

let youTubeName = "nishaYouTubeChannel";
let anotherName = youTubeName;
anotherName = "stack";

console.log(youTubeName);
console.log(anotherName);

let user = {
  name: "nisha",
  id: 101,
  email: "ny@gmail.com",
};

let user1 = user;
user1 = {
  name: "deepa",
  id: 102,
  email: "dy09@gmail.com",
};
// console.log(user);
// console.log(user1);

let user2 = user1;
user2.email = "vy@gmail.com";

console.log(user);
console.log(user1);
console.log(user2);

// user1 and user2 represent heap scenario
