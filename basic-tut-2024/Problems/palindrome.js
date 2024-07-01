const num = 12321;

const numStr = num.toString();
console.log(numStr);

function paldFun(ele) {
  for (let i = 0; i < ele.length; i++) {
    if (ele[i] != ele[ele.length - (i + 1)]) {
      // 2(0)    2(4) (5-(0+1))
      // 2(1)    2(3) (5-(1+1))
      // 2(2)    2(2) (5-(2+1))
      console.log("no");
      return false;
    }
  }
  console.log("palyes", "yes");
  return true;
}
paldFun(numStr);
