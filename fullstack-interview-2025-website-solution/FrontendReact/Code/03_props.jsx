function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <>
      <Welcome name="Nisha" />
      <Welcome name="Alex" />
    </>
  );
}


import { useState } from "react";

// Ex:2
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Controls onIncrement={() => setCount(c => c + 1)} />
    </>
  );
}

function Display({ count }) {
  return <h2>Count: {count}</h2>;
}

function Controls({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Parent;
