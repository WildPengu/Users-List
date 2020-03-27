import React from "react";
import User from "./User";
import "../styles/UsersContainer.css";

const UsersContainer = props => {
  const users = props.users.map(user => (
    <div className="user">
      <User name={user.name} deleteUser={props.deleteUser} id={user.id} />
    </div>
  ));
  return <div className="users-container">{users}</div>;
};

export default UsersContainer;
