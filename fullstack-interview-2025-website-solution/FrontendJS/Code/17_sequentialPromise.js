console.log(
  "------------------------- Sequential Promises - Parallel Promises RESULT  ------------------------"
);

// Mock async tasks
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
}

function task2(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prev + " → Task 2 completed");
    }, 1000);
  });
}

function task3(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prev + " → Task 3 completed");
    }, 1000);
  });
}

// Sequential Promises (runs one after another)
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

// Parallel Promises (runs all at the same time)
async function parallelTasks() {
  console.log("Start");

  const [result1, result2, result3] = await Promise.all([
    task1(),
    task2("From parallel"),
    task3("From parallel"),
  ]);

  console.log(result1);
  console.log(result2);
  console.log(result3);

  console.log("End");
}

// Run
sequentialTasks();
// parallelTasks();
