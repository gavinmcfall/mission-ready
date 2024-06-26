import { useState } from "react";

// Components
import Card from "./components/Card";
import Circle from "./components/Circle";
import UserInput from "./components/UserInput";
import CheckBox from "./components/CheckBox";

// CSS
import styles from "./App.module.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isBorderChanged, setIsBorderChanged] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Display thinking message
    setThinking(true);
    setOutput("...");

    // Execute timer
    setTimeout(() => {
      setThinking(false);
      setOutput(userInput);
    }, 1000);
  }
  return (
    <div className={styles.container}>
      <UserInput handleSubmit={handleSubmit} setUserInput={setUserInput} />
      <CheckBox setIsBorderChanged={setIsBorderChanged} />
      <Card>
        <Circle output={output} />
        {thinking && <p>"thinking..."</p>}
      </Card>
      <Card
        className={`${styles.card2} ${
          isBorderChanged ? styles.changedBorder : ""
        }`}
      >
        <Circle output={output} />
        {thinking && <p>"thinking..."</p>}
      </Card>
    </div>
  );
}

export default App;
