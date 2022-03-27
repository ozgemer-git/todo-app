import React from "react";
import "./CreateTask.css";

const CreateTask = (props) => {
  const taskSubmit = (e) => {
    const task = document.getElementById("task-text");
    e.preventDefault();
    if (task.value.trim() !== "") {
      props.submit(task.value.trim());
      task.value = "";
      return;
    }
    alert("bad input");
  };
  return (
    <div className="create">
      <form onSubmit={taskSubmit}>
        <input
          type="text"
          className="task-text"
          id="task-text"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default CreateTask;
