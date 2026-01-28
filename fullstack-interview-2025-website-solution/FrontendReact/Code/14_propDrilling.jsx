function App() {
  const user = "Nisha";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello {user}</h1>;
}


// Here:
// Parent and Child don’t use user
// They only pass it down
// This is prop drilling


// Why it’s a problem: 
// Makes code harder to read
// Components become tightly coupled
// Refactoring becomes error-prone
// Not scalable for large apps