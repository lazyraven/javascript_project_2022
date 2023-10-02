// faster/easier way to access/unpack values from arrays
// object ordering not mattered

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// 1.
// const { first, last, city, siblings } = bob;

// 2.
// const {
//   first: firstName,
//   last,
//   city,
//   siblings: { sister },
// } = bob;

// console.log(first, last, city, sister);
// console.log(firstName, last, city, sister);

// 3.
// const {
//   first: firstName,
//   last,
//   city,
//   siblings: { sister: favSis },
// } = bob;
// console.log(firstName, last, city, favSis);

// 4.
// const firstName = bob.first;
// const lastName = bob.last;
// const sisName = bob.siblings.sister;

// console.log(firstName, lastName, sisName);

// 5. by function
// function printPerson(person) {
//   console.log(person.first);
// }
// printPerson(bob);

// 6. by function direct destructure into the function

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, city, sister);
}
printPerson(bob);
