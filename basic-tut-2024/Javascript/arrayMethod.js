// Value Vs References
const numbers = [1, 2, 3, 4];

const anotherNumbers = numbers;
anotherNumbers.push(5);
console.log("Numbers", numbers, anotherNumbers);
console.log(anotherNumbers == numbers);

// Cloning Array
// One level Deep
const original = [1, 2, 3, 4];

const newOg = [...original];
newOg.push(5);
console.log("Orginial", original, newOg);
console.log(newOg == original);

// Cloning Array
// Two level Deep
const products = [
  { productname: "Nokia", productCount: 24 },
  { productname: "Samsung", productCount: 12 },
];

const newProducts = JSON.parse(JSON.stringify(products));
console.log("Product Details", products, newProducts);
console.log(products == newProducts);

// --------------------

// let rows = ["Naomi", "Quincy", "CamperChan"];

// let pushed = rows.push("freeCodeCamp");
// console.log(rows);

// rows.push(4);
