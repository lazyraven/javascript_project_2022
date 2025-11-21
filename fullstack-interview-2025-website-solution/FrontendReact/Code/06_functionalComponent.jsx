import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
       {/* <button onClick={() => setCount((count) => count + 1)}>
           Common Component count is {count}
    </button> */}
    </div>
  );
}

export default Counter;


// with hooks
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // runs after mount & update

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
// export default Example;
