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



// Core Concepts (Interview Must-Know)
// 1. Store > Holds the global state.
const store1 = configureStore({ reducer: rootReducer });

// 2. Actions > Plain objects describing what happened.
{ type: "INCREMENT" }

// 3. Reducers > Pure functions that update state.
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

// 4. Dispatch > Used to trigger actions.
dispatch({ type: "INCREMENT" });


// --------------
// Redux Toolkit (Modern Redux – Interview Favorite)
// “Today, we mostly use Redux Toolkit, which reduces boilerplate and provides best practices by default.”
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1
  }
});

// Async Handling (Extra Points)
dispatch(fetchUsers());