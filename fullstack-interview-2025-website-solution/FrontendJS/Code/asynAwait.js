console.log(
  "------------------------- ASYNC-AWAIT RESULT ------------------------"
);
const fetchDataRec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

fetchDataRec
  .then((data) => console.log(".then promise", data))
  .catch((err) => console.error(err));

async function getData() {
  try {
    const data = await fetchDataRec;
    console.log("after await", data);
  } catch (error) {
    console.error(error);
  }
}

getData();
