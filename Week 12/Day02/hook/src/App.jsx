import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // ---------------useState Demos----------------

  // let count = 0;

  // function incrementByOne() {
  //   count++;
  //   console.log(count);
  // }
  const [count, setCount] = useState(0);
  const [subtractCount, setSubtractCount] = useState(100);
  const [sum, setSum] = useState(0);
  const [colour, setColour] = useState("red");
  const [textColour, setTextColour] = useState("blue");

  function incrementByOne() {
    setCount(count + 1);
  }
  function decrementByOne() {
    setSubtractCount(subtractCount - 1);
  }
  console.log(count);
  console.log(subtractCount);

  // ---------------useEffect Demos----------------

  useEffect(function () {
    // The useEffect is triggered on every render (ever update) of the component.
    console.log("Component re-rendered");
  });

  useEffect(
    function () {
      // The useEffect is triggered every time the subtractCount state variable is updated.
      console.log("subtractCount state variable was updated");
    },
    [subtractCount]
  );

  useEffect(() => {
    // The useEffect is triggered only once when the component is mounted.
    console.log("Component rendered for the FIRST time only");
  }, []);

  useEffect(function () {
    return function () {
      // This function will be called when the component is unmounted.
      console.log("Component unmounted");
    };
  });

  // Example 1

  // useEffect(function () {
  //   console.log(
  //     `Count is at ${count} and SubtractCount is at ${subtractCount}`
  //   );
  // });

  useEffect(() => {
    console.log(`The count is at ${count}`);
    setSum(sum + count);
    console.log(`The sum is at ${sum}`);
  }, [count]);

  // Example 2

  function changeColour() {
    switch (colour) {
      case "red":
        setColour("blue");
        setTextColour("green");
        break;
      case "blue":
        setColour("green");
        setTextColour("orange");
        break;
      case "green":
        setColour("orange");
        setTextColour("yellow");
        break;
      case "orange":
        setColour("yellow");
        setTextColour("red");
        break;
      default:
        setColour("red");
        setTextColour("blue");
    }
  }

  useEffect(() => {
    console.log(`The background Colour is ${colour}`);
    console.log(`The text Colour is ${textColour}`);
  }, [changeColour]);

  //---------------return---------------
  return (
    <>
      <div className="App">
        <h1 style={{ backgroundColor: colour, color: textColour }}>
          The element is going to change colour
        </h1>
        <button onClick={changeColour}>Change Colour</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={incrementByOne}>count is {count}</button>
      <button onClick={decrementByOne}>count is {subtractCount}</button>
    </>
  );
}

export default App;

// useEffect(() => {}) - One Argument
// useEffect(() => {}, []) - Two Arguments

// () => {} is the mandatory function that will run when the Hook gets activated

// [] is an optional set of dependencies which decide when the hook gets activated
