import React from "react";
import "./Filter.css";

const Filter = (props) => {
  const toggle = (m) => {
    const modeArr = [
      document.getElementById("toggle-all"),
      document.getElementById("toggle-active"),
      document.getElementById("toggle-complete"),
    ];
    reset(modeArr);
    // eslint-disable-next-line default-case
    switch (m) {
      case "all":
        setAll(modeArr);
        break;
      case "active":
        setActive(modeArr);
        break;
      case "complete":
        setComplete(modeArr);
        break;
    }
    props.action(m);
  };
  function reset(arr) {
    arr.forEach((element) => {
      element.classList.remove("active");
    });
  }

  function setAll(arr) {
    arr[0].classList.add("active");
  }

  function setActive(arr) {
    arr[1].classList.add("active");
  }

  function setComplete(arr) {
    arr[2].classList.add("active");
  }

  return (
    <div className="filter-container">
      <button
        className="disabled active"
        id="toggle-all"
        onClick={() => toggle("all")}
      >
        All
      </button>
      <button
        className="disabled"
        id="toggle-active"
        onClick={() => toggle("active")}
      >
        Active
      </button>
      <button
        className="disabled"
        id="toggle-complete"
        onClick={() => toggle("complete")}
      >
        Complete
      </button>
    </div>
  );
};

export default Filter;
