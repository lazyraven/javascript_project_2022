const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {});

// for first check use
// addColor(1000, ".first", "red");

// for second check 2s check use
// addColor(1000, ".first", "red").then(() => {
//   addColor(2000, ".second", "blue");
// });

// for third check 3s check use

// addColor(1000, ".first", "red").then(() => {
//   addColor(2000, ".second", "blue")
//     .then(() => {
//       addColor(3000, ".third", "green");
//     })
//     .catch((err) => console.log(err));
// });

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red").then(() => {
    addColor(2000, ".second", "blue")
      .then(() => {
        addColor(3000, ".third", "green");
      })
      .catch((err) => console.log(err));
  });
});

function addColor(time, selector, colorName) {
  const element = document.querySelector(selector);

  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = colorName;
        resolve();
      }, time);
    } else {
      reject(`There is no such element : ${selector}`);
    }
  });
}

// take 4th parameter data for more complicated
// btn.addEventListener("click", () => {
//   addColor(1000, ".first", "red", "Hello World").then((data) => {
//     addColor(2000, ".second", "blue", data)
//       .then((data) => {
//         console.log("data", data);
//         addColor(3000, ".third", "green");
//       })
//       .catch((err) => console.log(err));
//   });
// });

// function addColor(time, selector, colorName, data) {
//   const element = document.querySelector(selector);

//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = colorName;
//         resolve(data);
//       }, time);
//     } else {
//       reject(`There is no such element : ${selector}`);
//     }
//   });
// }
