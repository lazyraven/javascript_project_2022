let name = "Nisha";

function reverseElement(name) {
  let reverseTerm = "";
  for (let i = 1; i < name.length; i++) {
    if (i <= name.length) {
      reverseTerm = reverseTerm + name[name.length - i];
    }
    console.log("reverseTerm called", reverseTerm);
  }
}
reverseElement(name);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
