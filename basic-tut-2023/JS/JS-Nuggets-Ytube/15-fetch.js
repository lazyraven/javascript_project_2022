//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tours-project";

// fetch(url)
//   .then((res) => {
//     console.log("res", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 1.
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log("data", data))
//   .catch((err) => console.log(err));

//2. asyn/await
// const getTour = async () => {
//   const res = await fetch(url);
//   const data = res.json();
//   console.log("data", data);
// };
// getTour();

//2. asyn/await try-catch
const getTour = async () => {
  try {
    const res = await fetch(url);
    // const tour = res.json();
    // console.log("tour", tour);
    // return tour;
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
// getTour();
console.log(getTour().then());
