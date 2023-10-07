// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = "udemy";

const arrayList = Array.from(udemy);
console.log("arrayList", arrayList);

const text = document.querySelectorAll(".text");
console.log(text);

// const newText = Array.from(text);

// find particular h3 element by Array.from
const newText = Array.from(text).find((item) => item.textContent == "Person");
console.log(newText);

// Array.from with object => how to handled pagination thing using call back function  which was second parameter

// const items = Array.from({ length: 120 });
// console.log("items", items);

// we need to take a callback function

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});
console.log("items", items);

const itemsPerPage = 8; //pagination (15pages)
// const itemsPerPage = 14; // pagination (9pages)

const pages = Math.ceil(items.length / itemsPerPage); //Match.ceil => to displaying point number to exact number
console.log("pages", pages);

// per page displaying rows based itemsPerPage (if 8), like 8 length per array next will start from 0-8, 8-16 then 16-32
// per page displaying rows based itemsPerPage (if 814), like 14 length per array next will start from 0-14, 14-28 then 28-42

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});
console.log(newItems);
