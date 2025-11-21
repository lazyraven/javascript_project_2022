

// 📘 Full Demo: Optimized React App
// ✔ Features:

// A parent component with counters

// A memoized child that receives a value and a callback

// A heavy calculation cached with useMemo

// A stable function cached with useCallback

// Renders minimized and visible in the console

import { useState, useMemo, useCallback } from "react";

// 1️⃣ Heavy calculation
function heavyCalculation(num) {
  console.log("Running heavy calculation...");
  for (let i = 0; i < 2000000000; i++) {} // simulate slow work
  return num * 2;
}

// 2️⃣ Memoized Child Component
const Child = React.memo(function Child({ result, onNotify }) {
  console.log("Child rendered");
  return (
    <div>
      <h2>Calculated Result: {result}</h2>
      <button onClick={onNotify}>Notify Parent</button>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  // 3️⃣ useMemo — cache heavy computation
  const result = useMemo(() => heavyCalculation(value), [value]);

  // 4️⃣ useCallback — stable function reference
  const handleNotify = useCallback(() => {
    console.log("Child clicked!");
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>

      {/* Updates parent state → but child should not re-render */}
      <button onClick={() => setCount(count + 1)}>Update Parent</button>

      <br /><br />

      {/* Updates heavy calculation */}
      <button onClick={() => setValue(value + 1)}>Increase Value</button>

      <hr />

      {/* Memoized child receives stable props */}
      <Child result={result} onNotify={handleNotify} />
    </div>
  );
}

// 🧠 What each part does
// 1. React.memo

// Child only re-renders when result or onNotify changes.

// 2. useMemo

// Prevents recalculating the heavy function unless value changes.

// 3. useCallback

// Prevents the function reference from changing on every render, so it does not trigger a re-render in the memoized child.


// ✔ Expected Console Behavior

// Clicking Update Parent
// → parent re-renders
// → child does NOT re-render

// Clicking Increase Value
// → heavy calculation runs
// → child re-renders (because prop changed)

// Clicking Notify Parent
// → logs message
// → no extra renders