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
  document.getElementById("output").textContent = "Count: " + newCount;
});
