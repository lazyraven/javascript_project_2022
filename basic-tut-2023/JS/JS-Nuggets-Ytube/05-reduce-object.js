// Reduce - Objects
// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

// const recordCart = cart.reduce(
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItems += amount;
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

// cartTotal = cartTotal.toFixed(2);
// console.log("recordCart", totalItems, ",", cartTotal);

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log("recordCart", totalItems, ",", cartTotal);

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const newData = data.reduce((total, repo) => {
    const { language, languages_url } = repo;
    // if (language) {
    // if (total[language]) {
    // console.log(total[language]);
    //   total[language] = total[language] + 1;
    // } else {
    //   total[language] = 1;
    // }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log("newData", newData);
};
fetchRepo();
