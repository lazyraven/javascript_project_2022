function outerFunction() {
  const name = " Nisha";
  return function innerFuntion() {
    console.log("Hello " + name);
  };
}
console.log("outerFunction CALLED", outerFunction());

const greet = outerFunction();
greet();
console.log("greet CALLED", greet());


// Important Notes

//  count++; (o/p 0, 1) and  ++count;(o/p 1,2) both are different.  it'll give you different result

// Private Variables :
function counter() {
  let count = 0;
  return function () {
    // return count++;
    return ++count;
  };
}
const increment = counter();
console.log(increment()); // o/p => 1
console.log(increment()); // o/p => 2

// Iterators :
function createIterators(items) {
  let index = 0;
  return function () {
    return items[index++];
  };
}

const fruitsIterator = createIterators(["apple", "banana", "orange"]);
console.log(fruitsIterator());
console.log(fruitsIterator());

// Definition 2
function createHustler(name) {
  let greetHi = "Hi ";
  function greet() {
    return greetHi + name + ", welcome to hustler group";
  }
  return greet;
}

let greetFn = createHustler("Nisha");
console.log(greetFn());
