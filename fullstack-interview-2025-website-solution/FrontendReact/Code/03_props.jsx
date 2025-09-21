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
