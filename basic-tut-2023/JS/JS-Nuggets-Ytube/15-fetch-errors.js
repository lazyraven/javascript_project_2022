//  Javascript Nuggets
// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = "https://www.course-api.com/react-tours-project";
const wrongUrl = "https://www.course-api.com/react-tours-projects";

const getTours = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
};
getTours();

const errorCheckGetTours = async () => {
  try {
    const res = await fetch(wrongUrl);
    console.log("res", res);
    if (!res.ok) {
      const msg = `There was an error ${res.status} ${res.statusText} `;
      throw new Error(msg);
    }
    const tour = await res.json();
    console.log("tour", tour);
  } catch (err) {
    console.log(err);
  }
};
errorCheckGetTours();

const btn = document.querySelector(".btn");
btn.addEventListener("click", getTours);
