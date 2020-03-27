import React from "react";
import Button from "./Button";
import NewUserInput from "./NewUserInput";
import "../styles/AddUserForm.css";

const AddUserForm = props => {
  return (
    <form
      className="add-user-form"
      onClick={e => {
        e.preventDefault();
      }}
    >
      <NewUserInput
        getNewUserName={props.getNewUserName}
        newUser={props.newUser}
      />
      <Button addUser={props.addUser} />
    </form>
  );
};

export default AddUserForm;
