import { useState, useEffect } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);
  const [animal, setAnimal] = useState(null);

  console.log(isOn);

  return (
    <div className="toggle-button">
      <h1>Toggle Button</h1>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
}

export default ToggleButton;
//can use &nbsp; if not wanting to quanity one of the states
