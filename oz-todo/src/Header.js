import React from "react";
import "./Header.css";

const Header = (props) => {
  const toggleTheme = (mode) => {
    props.theme(mode);
  };

  return (
    <div className="header">
      <h1>TO DO</h1>
      <label
        id="light-mode"
        className="theme-pic sun-pic"
        onClick={() => toggleTheme("light")}
      >
        <input type="radio" name="choose-theme" className="theme-change" />
      </label>
      <label
        id="dark-mode"
        className="theme-pic moon-pic"
        onClick={() => toggleTheme("dark")}
      >
        <input
          type="radio"
          name="choose-theme"
          className="theme-change"
          defaultChecked
        />
      </label>
    </div>
  );
};

export default Header;
