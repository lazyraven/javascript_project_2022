const num = 12321;

const numStr = num.toString();
console.log(numStr);

function paldFun(ele) {
  // for (let i = 0; i < ele.length; i++) {
  //   if (ele[i] != ele[ele.length - 1]) {
  //     return console.log(false);
  //   }
  //   return console.log(true);
  // }

  let newStr = ele.split("").reverse().join("");
  if (ele != newStr) {
    return console.log(false);
  }
  return console.log(true);
}
paldFun(numStr);
paldFun("NisiN");
paldFun("Nisha");

