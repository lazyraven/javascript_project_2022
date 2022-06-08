console.log("slice js called");
let nameStr = "Nisha";

// const data = nameStr.slice(0, 3);
// const data = nameStr.slice(0);
const data = nameStr.slice(1, 3);
// const data = nameStr.slice(2);

console.log(data);

let string1 = "nishal1";
let string2 = "8107220633";

function resultString(res1, res2) {
  const data = res1 + res2;
  console.log(data, data.length);

  if (data.length <= 10) {
    let result = data1 + data2;
    console.log(result);
  } else {
    let data1 = res1.slice(0, 5);
    let data2 = res2.slice(0, 5);
    return data1 + data2;
  }
}
resultString(string1, string2);
resultString("Vis Yadav", "911878949");
