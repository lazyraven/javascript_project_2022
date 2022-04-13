function getPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function : Your promises has been resolved");

        resolve();
      } else {
        console.log("Function : Your promises has not been resolved");

        reject("sorry not fufilled");
      }
    }, 2000);
  });
}
getPromises()
  .then(() => {
    console.log("Nisha : Thanks for resolving");
  })
  .catch((err) => {
    console.log("Very bad Reason :", err);
  });
