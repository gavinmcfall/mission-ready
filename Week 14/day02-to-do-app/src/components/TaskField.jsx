import { useState } from "react";

function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState("");

  function handleNewTask(event) {
    setTask(event.target.value);
  }

  function submitTask(event) {
    event.preventDefault();
    addTaskToArray(task);
  }

  return (
    <form className="form-container" onSubmit={submitTask}>
      <label>Task</label>
      <input
        value={task}
        onChange={handleNewTask}
        placeholder="Add task"
        type="text"
      />
      <button className="submit-btn">Save Task</button>
    </form>
  );
}

export default TaskField;
