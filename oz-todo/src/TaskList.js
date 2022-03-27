import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  let [count, setCount] = React.useState(0);

  count = props.tasks.filter((t) => {
    if (!t.isComplete) return t;
    return null;
  }).length;

  const onDelete = (id) => {
    props.delete(id);
  };

  const onToggle = (id) => {
    props.update(id);
    setCount(
      props.tasks.filter((t) => {
        if (!t.isComplete) return t;
        return null;
      }).length
    );
  };

  const clearComplete = () => {
    props.clear();
  };

  return (
    <div className="task-container">
      {Array.from(props.tasks).map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            complete={task.isComplete}
            delete={onDelete}
            update={onToggle}
          />
        );
      })}
      <div className="task-footer">
        <span className="task-count">{count + " items left"}</span>
        <button className="clr-btn" onClick={clearComplete}>
          clear complete
        </button>
      </div>
    </div>
  );
};

export default TaskList;
