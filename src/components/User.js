import React from "react";
import "../styles/User.css";

const User = props => {
  return (
    <div className="user" onClick={() => props.deleteUser(props.id)}>
      {props.name}
    </div>
  );
};

export default User;
