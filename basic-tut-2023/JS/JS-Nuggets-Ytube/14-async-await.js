//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
//   return "Hello There!!!";
//   console.log("Hello There!!!");
// };

// async function someFn() {
//   const result = await example();
//   console.log("result", result);
//   console.log("Hello someFun");
// }
// someFn();
// console.log(example());

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

//3. try/catch
const getData = async () => {
  try {
    const user = await getUser("john");
    const articles = await getArticle(user.id);
    console.log("try/catch", articles);
  } catch (error) {
    console.log(error);
  }
};
getData();

//2. aync/await
// const getData = async () => {
//   const user = await getUser("john");
//   if (user) {
//     const articles = await getArticle(user.id);
//     console.log("await", articles);
//   }
// };
// getData();

//1. by promise
// getUser("susan")
//   .then((user) => getArticle(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    console.log("user", user);
    if (user) {
      resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

function getArticle(id) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((article) => article.userId === id);
    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      return reject(`Wrong ID`);
    }
  });
}
