// Basic Syntax (Must Know)
const [count, setCount] = useState(0);
// count → current state value
// setCount → function to update state
// 0 → initial state

// How State Updates Work
setCount(count + 1);

// Better (when using previous state):
setCount(prev => prev + 1);

// Multiple State Variables
const [name, setName] = useState("");
const [age, setAge] = useState(0);