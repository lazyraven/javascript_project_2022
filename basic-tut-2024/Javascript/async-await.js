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

// 2025 Learning Notes

async function cookDinner() {
  console.log("Start cooking...");
  await waitForBoilingWater(); // Wait until water boils
  console.log("Add pasta.");
  await waitForCooking(); // Wait until pasta is cooked
  console.log("Dinner is ready!");
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here is your data");
    }, 2000); // waits 2 seconds
  });
}

async function showData() {
  console.log("Fetching data...");
  const result = await getData(); // Wait for the promise to finish
  console.log(result); // Then log it
}

showData();

// ✅ 1. Using fetch() with async/await

async function getUser() {
  console.log("Fetching user...");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();

  console.log(data);
}

getUser();

//  2. Handling Errors with try/catch // Example: With error handling

async function getUserSafe() {
  try {
    console.log("Fetching user...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

getUserSafe();
