// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ["apple", "orange", "lemon", "banana", "pear"];

const [first, second, ...restFruits] = fruits;

console.log(first, restFruits);
const specificFruit = restFruits.find((fruit) => fruit === "lemon");
console.log("specificFruit", specificFruit);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };

const { job, ...resObj } = person;
console.log(job, resObj);

const getAverage = (name, ...scores) => {
  console.log(name, scores);
  const average = scores.reduce((total, restVal) => {
    (total += restVal) / scores.length;
    return total;
  }, 0);
  console.log("average", average);
};

const testScores = [23, 87, 60, 20, 80];
getAverage(person.name, ...testScores); // rest/spread operator use
// getAverage(person.name, testScores); if we ued this we received value array into the array

// getAverage(person.name, 23, 87, 60, 20);
