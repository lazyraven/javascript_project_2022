
const handleClickOne = useCallback(() => {
  console.log("clicked");
}, []);

// syntax - useCallback (for functions)
const handleClick = useCallback(() => {
  doSomething();
}, []);


// 🧩 Where it's most useful
// 1. Preventing re-renders in memoized child components

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Parent update</button>
      <Child onClick={handleClick} />
    </>
  );
}

// Without useCallback, the child re-renders every time.
// With useCallback, the child does not re-render unless needed.

// 2. As dependencies for useEffect

const fetchData = useCallback(() => {
  // fetch logic
}, [userId]);

useEffect(() => {
  fetchData();
}, [fetchData]);

// This ensures the effect runs only when the actual function (not a new instance) changes.


// Basic Syntax
const memoizedFn = useCallback(() => {
  doSomething();
}, [dependencies]);

// Common Real Example
const handleClick1 = useCallback(() => {
  setCount(prev => prev + 1);
}, []);

// Passed to a child component:
<Button onClick={handleClick} />
// ➡ Prevents unnecessary child re-renders when wrapped with React.memo.

// Dependency Array (Important)
useCallback(() => {
  console.log(count);
}, [count])