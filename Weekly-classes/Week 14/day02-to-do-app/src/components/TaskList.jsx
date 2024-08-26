function TaskList({ tasksArray }) {
  return (
    <div>
      {tasksArray.map(function (task) {
        return <div>{task}</div>;
      })}
    </div>
  );
}

export default TaskList;
