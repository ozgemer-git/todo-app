import React, { useState } from "react";
import CreateTask from "./CreateTask";
import Filter from "./Filter";
import TaskList from "./TaskList";
import Header from "./Header";
import "./App.css";
import "./Genral.css";
import lightTheme from "./images/bg-desktop-light.jpg";
import darkTheme from "./images/bg-desktop-dark.jpg";
//import tasks from "./data/tasksData";
let tasks = [];

function App() {
  const [list, setList] = useState([]);

  const addTask = (t) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
      text: t,
      isComplete: false,
    };
    setList([...list, newTask]);
    tasks.push(newTask);
  };

  const toggleFilter = (mode) => {
    // eslint-disable-next-line default-case
    switch (mode) {
      case "complete":
        setList(
          tasks.filter((t) => {
            if (t.isComplete) return t;
            return null;
          })
        );
        break;
      case "active":
        setList(
          tasks.filter((t) => {
            if (!t.isComplete) return t;
            return null;
          })
        );
        break;
      case "all":
        setList(tasks);
        break;
    }
  };

  const onDelete = (id) => {
    const newtasks = tasks.filter((t) => {
      return t.id !== id;
    });
    tasks = newtasks;
    setList(newtasks);
  };

  const onToggle = (id) => {
    tasks.forEach((t) => {
      if (t.id === id) t.isComplete = !t.isComplete;
    });
    setList(tasks);
  };

  const onClear = () => {
    const newtasks = tasks.filter((t) => {
      if (!t.isComplete) return t;
      return null;
    });
    tasks = newtasks;
    setList(newtasks);
  };

  const CSS_ROOT = document.querySelector(":root");
  const toggleTheme = (mode) => {
    // eslint-disable-next-line default-case
    switch (mode) {
      case "light":
        changeToLight();
        break;
      case "dark":
        changeToDark();
        break;
    }
  };

  function changeToLight() {
    CSS_ROOT.style.setProperty("--bg-image", `url(${lightTheme})`);
    CSS_ROOT.style.setProperty("--bg-color", "hsl(233, 11%, 84%)");
    CSS_ROOT.style.setProperty("--container-color", "hsl(236, 33%, 92%)");
    CSS_ROOT.style.setProperty("--text-color", "black");
    CSS_ROOT.style.setProperty("--shadow-color", "hsl(236, 33%, 92%)");
    document.getElementById("light-mode").style.display = "none";
    document.getElementById("dark-mode").style.display = "inline-block";
  }

  function changeToDark() {
    CSS_ROOT.style.setProperty("--bg-image", `url(${darkTheme})`);
    CSS_ROOT.style.setProperty("--bg-color", "hsl(235, 21%, 11%)");
    CSS_ROOT.style.setProperty("--container-color", "hsl(235, 24%, 19%)");
    CSS_ROOT.style.setProperty("--text-color", "white");
    CSS_ROOT.style.setProperty("--shadow-color", "hsl(237, 14%, 26%)");
    document.getElementById("light-mode").style.display = "inline-block";
    document.getElementById("dark-mode").style.display = "none";
  }

  return (
    <div className="todo">
      <Header theme={toggleTheme} />
      <CreateTask submit={addTask} />
      <TaskList
        tasks={list}
        delete={onDelete}
        update={onToggle}
        clear={onClear}
      />
      <Filter action={toggleFilter} />
    </div>
  );
}

export default App;
