import React from "react";
import "../styles/NewUserInput.css";

const NewUserInput = props => {
  return (
    <input
      onChange={props.getNewUserName}
      type="text"
      name="name"
      placeholder="User name"
      value={props.newUser}
      className="newUserInput"
    />
  );
};

export default NewUserInput;
