// Definition:  Promises are javascript objects that represent an eventual completion or failure of an asynchronous operation.

// callback function
const greet = (name) => {
  console.log("Hi " + name);
};

//function
const callMe = () => {
  return new Promise((resolve, reject) => {
    let name = prompt("Enter your name");
    if (name) resolve(name);
    reject(false);
  });
};

//start call
callMe().then((result) => greet(result));
