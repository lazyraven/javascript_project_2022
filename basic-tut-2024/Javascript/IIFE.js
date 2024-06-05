//IIFE - Immediately Invoked Functional Expressions
const pr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved called");
    }, 1500);
  });
};

async () => {
  const a = await pr();
  console.log(a);
  const b = await pr();
  console.log(b);
  const c = await pr();
  console.log(c);
};
