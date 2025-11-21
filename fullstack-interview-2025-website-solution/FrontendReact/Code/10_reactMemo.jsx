
// Syntax - (for components)

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log("Rendered");
  return <div>{value}</div>;
});

// -----------------

// practical example showing how React memoization improves performance.
// This includes:
// A non-memoized version (causes unnecessary re-renders)
// A memoized version (optimized)


// Scenario - You have:

// A Parent component with a counter
// A Child component that receives a prop
// The child should not re-render when the counter changes unless its prop changes

// --------------❌ Without memoization — unnecessary re-renders
function Child({name}){
    console.log("Child renderes");
    return <h2>{name}</h2>
}

export default function App(){
    const [count, setCount] =  useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <Child name="Nisha"/>
        </div>
    )
}

// Problem
// Even though the child's prop doesn’t change, it still re-renders every time you click the button because its parent re-renders.


// --------------✅ With memoization — optimized
const Child = React.memo(function Child({name}){
    console.log("Child rendered");
    return <h2>{name}</h2>
})

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child name="Nisha" />
    </>
  );
}

// Result

// Now the child renders only once.
// Even if you click the button 50 times, the Child component does not re-render because its prop (name) never changes.

// React compares props of the memoized component:

// If props are same → skip re-render

// If props changed → re-render

// This saves performance in large component trees.