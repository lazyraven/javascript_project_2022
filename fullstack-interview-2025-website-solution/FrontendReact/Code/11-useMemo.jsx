

// Syntax - useMemo (for expensive calculations)
const result = useMemo(() => expensiveCalculation(data), [data]);

// ----------------
// practical example of using useMemo to cache a heavy calculation so it doesn’t run on every render.

// ❌ Without useMemo — expensive work runs every time
// Imagine a function that takes 2–3 seconds to compute:

function heavyCalculation(){
     console.log("Running heavy calculation...");
     for(let i=0; i<2000000000; i++){}// simulate slow work
     return num*2
}


export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const result = heavyCalculation(value); // runs on every render
return (
    <>
    <h1>Result : {result}</h1>
    <button onClick={()=>setCount(count+1)}>Re-render App</button>
     <br /><br />
    <button onClick={()=>setValue(value+1)}>Change Value</button>
    </>
)
}

// Problem - Even when you click Re-render App, the heavy calculation runs again unnecessarily.

// ✅ With useMemo — cached and fast

function heavyCalculation(num) {
  console.log("Running heavy calculation...");
  for (let i = 0; i < 2000000000; i++) {} // simulate slow work
  return num * 2;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  // useMemo caches the result unless `value` changes
  const result = useMemo(() => heavyCalculation(value), [value]);

  return (
    <>
      <h1>Result: {result}</h1>

      <button onClick={() => setCount(count + 1)}>Re-render App</button>
      <br /><br />

      <button onClick={() => setValue(value + 1)}>Change Value</button>
    </>
  );
}

// What happens now - 

// Click Re-render App → no recalculation, because value didn’t change

// Click Change Value → recalculation happens once, then cached again

// This makes your UI responsive even when calculations are slow.