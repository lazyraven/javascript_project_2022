// mockQA.js

// for check answer
// Open terminal → run node mockQA.js.
// visha@DESKTOP-J2QR97F MINGW64 /c/workspace-nisha/01_github/02_Javascript/javascript_project_2022/fullstack-interview-2025-website-solution/mock-QA (main)
// $ node mock.js
c; // fullMockQA.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    q: "1. Differences between var, let, and const?",
    a: "var: function-scoped, can be redeclared.\nlet: block-scoped, cannot be redeclared in the same scope.\nconst: block-scoped, cannot be reassigned.",
  },
  {
    q: "2. Difference between == and ===?",
    a: "== checks value after type coercion; === checks value and type strictly.",
  },
  {
    q: "3. How to check if a variable is an array?",
    a: "Use Array.isArray(variable).",
  },
  {
    q: "4. What is a closure? Example?",
    a: "A closure is a function that remembers its outer scope.\nExample:\nfunction outer(){ let x=5; return function(){ console.log(x); } }",
  },
  {
    q: "5. Difference between null and undefined?",
    a: "null is assigned value meaning 'no value'; undefined means a variable is declared but not assigned.",
  },
  {
    q: "6. Difference between call, apply, and bind?",
    a: "call: immediately invokes function with given this and args.\napply: same as call, but args in array.\nbind: returns a new function with bound this and args, not invoked immediately.",
  },
  {
    q: "7. Synchronous vs Asynchronous code?",
    a: "Synchronous: code runs line by line.\nAsynchronous: code can run later while other code continues (e.g., setTimeout, fetch, Promises).",
  },
  {
    q: "8. What is event bubbling and capturing?",
    a: "Event bubbling: event propagates from target up to root.\nEvent capturing: event propagates from root down to target.",
  },
  {
    q: "9. Explain 'this' keyword in JavaScript.",
    a: "'this' refers to the context of the function call:\n- In global scope: window (browser), global (Node).\n- In object method: the object.\n- In constructor: the instance.\n- In arrow function: inherits from parent scope.",
  },
  {
    q: "10. What is a Promise and how to use async/await?",
    a: "Promise: object representing future completion/failure.\nExample:\nasync function fetchData(){ try{ const res = await fetch(url); } catch(e){ console.error(e); } }",
  },
  {
    q: "11. Difference between prototype and class?",
    a: "Prototype: older way to add methods to objects.\nClass: syntactic sugar over prototype-based inheritance.",
  },
  {
    q: "12. What is a module? CommonJS vs ES6 modules?",
    a: "Module: reusable code unit.\nCommonJS: Node.js, uses require/exports.\nES6: uses import/export.",
  },
  {
    q: "13. How does the event loop work?",
    a: "JS is single-threaded. Event loop handles callbacks from the task queue after current call stack is empty.",
  },
  {
    q: "14. What are Generators? Example?",
    a: "Generators are functions that can pause and resume using yield.\nExample:\nfunction* gen(){ yield 1; yield 2; }\nconst g=gen(); console.log(g.next().value);",
  },
  {
    q: "15. Explain memory leaks in JS and prevention.",
    a: "Memory leaks occur when memory is not released.\nPrevent: remove unused references, avoid global vars, clear timers, detach DOM listeners.",
  },
];

let index = 0;
let score = 0;

function askQuestion() {
  if (index < questions.length) {
    rl.question(`\n${questions[index].q}\nYour answer: `, (userInput) => {
      console.log(`\x1b[33mSolution:\x1b[0m ${questions[index].a}\n`); // yellow color
      index++;
      askQuestion();
    });
  } else {
    console.log(`\x1b[32mQuiz Complete! Great job!\x1b[0m`);
    rl.close();
  }
}

console.log(
  "\x1b[36mWelcome to JavaScript Mock Q&A! Type your answer and press Enter to see the solution.\x1b[0m"
);
askQuestion();
