// Unique Values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

//   Question 1. find categories without duplicate record
//             2.

const categories = menu.map((item) => item.category);
console.log("categories", categories);

const removeDupliCategories = new Set(menu.map((item) => item.category));
console.log("removeDupliCategories", removeDupliCategories);

const inArrayCategories = ['all', ...new Set(menu.map((item) => item.category))];
console.log("inArrayCategories", inArrayCategories);

const result = document.querySelector(".result");

result.innerHTML = inArrayCategories.map((rec) => {
    return `<button>${rec}</button>`
}).join('');
