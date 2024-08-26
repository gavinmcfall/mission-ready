"use strict";
import "./App.css";
import { Button, Link } from "@mui/material";

function App() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <>
      <div className="App">
        <Button
          onClick={handleClick}
          href="https://google.co.nz"
          colour="secondary"
          variant="contained"
        >
          Google NZ
        </Button>
      </div>
    </>
  );
}

export default App;
