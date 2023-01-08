import * as Sanity from "sanity";

console.log("Sanity out of component", Sanity);

export function App() {
  console.log("Sanity in component", Sanity);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
