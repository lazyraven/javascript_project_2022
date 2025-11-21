import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default Counter;
    