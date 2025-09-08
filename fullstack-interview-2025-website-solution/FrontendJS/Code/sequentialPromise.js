console.log(
  "------------------------- Sequential Promises - Parallel Promises RESULT  ------------------------"
);

// Sequential Promises
async function sequentialTasks() {
  console.log("Start");

  const result1 = await task1(); // waits for task1
  console.log(result1);

  const result2 = await task2(result1); // starts after task1 finishes
  console.log(result2);

  const result3 = await task3(result2); // starts after task2 finishes
  console.log(result3);

  console.log("End");
}

// Parallel Promises
async function parallelTasks() {
  console.log("Start");

  const [result1, result2, result3] = await Promise.all([
    task1(),
    task2(),
    task3(),
  ]);

  console.log(result1, result2, result3);

  console.log("End");
}
