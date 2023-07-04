import React, { Component } from "react";
import posed from "react-pose";
import uniqid from "uniqid";
import UserConsumer from "../context";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    department: "",
    salary: "",
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;

    const newUser = {
      id: uniqid(),
      name: name,
      salary,
      department,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
    console.log(newUser);
  };

  changeInput = (e) => {
    this.setState({
      //name
      [e.target.name]: e.target.value,
      //department
      [e.target.department]: e.target.value,
      //salary
      [e.target.salary]: e.target.value,
    });
  };

  render() {
    const { visible, name, salary, department } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block mb-2"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="id"
                          className="form-control"
                          placeholder="Enter Name"
                          value={name}
                          onChange={this.changeInput}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Departman</label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          className="form-control"
                          placeholder="Enter Department"
                          value={department}
                          onChange={this.changeInput}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">Maaş</label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          className="form-control"
                          placeholder="Enter Salary"
                          value={salary}
                          onChange={this.changeInput}
                        ></input>
                      </div>
                      <button
                        className="btn btn-danger btn-block"
                        type="submit"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;
