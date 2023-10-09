function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// mapUpperCase("Nisha");

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullname = `${name} yadav`;
  //   console.log(fullname);
  cb(fullname);
}
handleName("nisha", makeUppercase);
handleName("nisha", reverseString);

const clickBtnEvent = document.querySelector(".btn");
// clickEvent.addEventListener("click", () => {
//   console.log("hello world!!");
// });

clickBtnEvent.addEventListener("click", sayHello);

function sayHello() {
  console.log("hello people");
}

// array methods, setTimeout etc
