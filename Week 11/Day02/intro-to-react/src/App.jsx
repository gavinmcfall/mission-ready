import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message1 = "My old friend";
  const message2 = "I've come to talk with you again";
  return (
    <>
      <h1>Hello Darkness</h1>
      <h2>{message1}</h2>
      <p>{message2}</p>
    </>
  );
}

export default App;
