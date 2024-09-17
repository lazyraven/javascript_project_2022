let data = [
  {
    name: "Nisha",
    profession: "Software Enginner",
  },
  { name: "Vishal", profession: "Software Enginner" },
];

// setTimeout - ONE
function getDatas() {
  let output = "";
  setTimeout(() => {
    data.forEach((item, index) => {
      output += `<li>${item.name}</li>`;
    });
    document.body.innerHTML = output;
    //   }, 1000);
  }, 3000);
}

function createData(newData) {
  setTimeout(() => {
    data.push(newData);
  }, 2000);
}
createData({ name: "Deepa", profession: "Software Enginner" });
getDatas();

// callback - TWO
let data1 = [
  {
    name: "JS",
    profession: "Software Enginner",
  },
  { name: "Vue", profession: "Software Enginner" },
];

function getDatas1() {
  let output = "";
  setTimeout(() => {
    data1.forEach((item, index) => {
      output += `<li>${item.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData1(newData, callback) {
  setTimeout(() => {
    data1.push(newData);
    callback();
  }, 2000);
}
createData1({ name: "Deepa", profession: "Software Enginner" }, getDatas1);
