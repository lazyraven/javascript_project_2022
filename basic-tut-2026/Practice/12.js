// Count Characters in a String
const greeting = "hello"
// output : {
//     h:1,
//     e:1,
//     l:2,
//     o:1
//   }

function countCharacter(str) {
   // // const convertInArr = str.split("") // no need of split because using for of loop
    const frequency = {};
    for (const char of str) {
        // if (frequency[char]) {
        //     frequency[char]++
        // } else {
        //     frequency[char] = 1;
        // }
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }
  return frequency;
}
console.log(countCharacter("hello"));

// You can make it even shorter using a ternary operator:

// for (const char of str) {
//     frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
// }

// Or the most modern concise approach:
function countCharacter(str) {
    return [...str].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}