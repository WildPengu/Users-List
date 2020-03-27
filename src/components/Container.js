import React from "react";
import AddUserForm from "./AddUserForm";
import UsersContainer from "./UsersContainer";
import "../styles/Container.css";

class Container extends React.Component {
  id = 3;
  state = {
    newUser: "",
    users: [
      {
        id: 0,
        name: "Maurycjusz"
      },
      {
        id: 1,
        name: "Żanklod"
      },
      {
        id: 2,
        name: "Oktawiusz"
      }
    ]
  };

  addUser = () => {
    if (this.InputValidation()) {
      const user = {
        id: this.id,
        name: this.state.newUser
      };
      this.setState({
        users: this.state.users.concat(user),
        newUser: ""
      });
      this.id++;
    }
  };

  InputValidation = () => {
    return this.state.newUser.trim() !== "";
  };

  getNewUserName = e => {
    this.setState({
      newUser: e.target.value
    });
  };

  deleteUser = id => {
    const users = this.state.users.filter(users => users.id !== id);
    this.setState({ users });
  };

  render() {
    return (
      <div className="container">
        <AddUserForm
          newUser={this.state.newUser}
          addUser={this.addUser}
          getNewUserName={this.getNewUserName}
        />
        <UsersContainer users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default Container;
