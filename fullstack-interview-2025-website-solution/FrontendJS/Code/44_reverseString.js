// Reverse string

const name = "Nisha Yadav";

function reverseString(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString + str[i];
    }
    return reverseString;
}
console.log(reverseString(name));
