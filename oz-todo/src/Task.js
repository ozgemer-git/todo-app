import React from "react";
import "./Task.css";
const cross = require("./images/icon-cross.svg").default;

const Task = (props) => {
  const deleteTask = (id) => {
    props.delete(id);
  };
  const toggleTask = (id) => {
    props.update(id);
  };

  return (
    <div className="task-info">
      <label className="task-desc">
        <input type="checkbox" defaultChecked={props.complete} />
        <span
          className="custom-checkbox"
          onClick={() => toggleTask(props.id)}
        ></span>
        <span className="task-desc-text" onClick={() => toggleTask(props.id)}>
          {props.text}
        </span>
      </label>
      <img
        src={cross}
        alt="delete"
        className="delete"
        onClick={() => deleteTask(props.id)}
      />
    </div>
  );
};

export default Task;
