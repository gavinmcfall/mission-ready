import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };


  console.log(tasksArray);

  return (
    <>
      <div className="app-container">
        <Header />
        <TaskField addTaskToArray={addTaskToArray} />
        <TaskList />
      </div>
    </>
  );
}

export default App;
