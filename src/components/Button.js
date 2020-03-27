import React from "react";
import "../styles/Button.css";

const Button = props => {
  return (
    <button className="add-user-button" onClick={props.addUser}>
      Add
    </button>
  );
};

export default Button;
