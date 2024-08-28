import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
    </>
  );
}

export default App;
