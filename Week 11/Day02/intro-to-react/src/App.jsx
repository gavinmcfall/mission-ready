import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message1 = "My old friend";
  const message2 = "I've come to";
  return (
    <>
      <Header />
      <h1>Hello Darkness</h1>
      <h2>{message1}</h2>
      <p>
        {message2 + " talk with you again:"}
      </p>
      <p>
      {((1330 / 2) + (20 * 2) - 40) + " The neighbour of the beast"}
      </p>
      <Footer />
    </>
  );
}

export default App;
