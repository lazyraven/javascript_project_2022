// store.js
import { createStore } from "redux";

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
}

// Store
const store = createStore(counterReducer);

// Dispatching actions
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // { count: 1 }
