console.log(
  "------------------------- FIBONACCI SEQUENCE RESULT ------------------------"
);

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
// 👉 Sequence looks like:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fibonacciSeq(n) {
  console.log("fibonacciSeq called");
  let seqValues = [0, 1];
  for (let i = 2; i < n; i++) {
    seqValues[i] = seqValues[i - 1] + seqValues[i - 2];
    // 0 = 2-1(1) + 2-2(0) = 1-index = 1 value
    // 1 = 3-1(2) + 3-2(1) = 3-index = 2 value
  }
  return seqValues;
}
console.log(fibonacciSeq(10));

// ✅ Use cases in real life:

// Algorithms (like dynamic programming)

// Nature (spirals in flowers, shells, etc.)

// Financial modeling

// Computer science problems (like search, sorting, etc.)
