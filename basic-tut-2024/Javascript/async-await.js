let fruits = ["Apple", "Banana", "Kiwi"];

const animateOne = (fruit, animate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      animate(fruit);
      resolve(true);
    }, 1000);
  });
};

const animateAll = async (animate) => {
  await animateOne(fruits[0], animate);
  await animateOne(fruits[1], animate);
  await animateOne(fruits[2], animate);
};

const animate = (fruit) => {
  console.log("animating", fruit);
};
animateAll(animate);
