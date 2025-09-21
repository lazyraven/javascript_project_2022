function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();

document.getElementById("btn").addEventListener("click", function () {
  const newCount = increment();
  console.log("newCount", newCount);

  document.getElementById("output").textContent = "Count: " + newCount;
});

// Lexical Scope : Here, inner() has access to x because of lexical scope.
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // inner can access x from outer
  }
  inner();
}
outer();

// Closure : inner() keeps access to count even after outer() has returned — that’s a closure in action
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
