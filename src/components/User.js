/* eslint-disable react/no-typos */
import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  state = {
    isVisible: false,
  };
  static defaultProps = {
    name: "Bilgi Yok",
    department: "Bilgi Yok",
    salary: "Bilgi Yok",
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };


  onDeleteUser = (dispatch,e) => {
    const {id} = this.props;

    dispatch({type: "DELETE_USER", payload: id});   
  }

  componentWillUnmount() {
    console.log("Componenet Will Unmount")
   }
  //   constructor(props){
  //     super(props);

  //     this.state={
  //         test : "Test",
  //         isVisible: false
  //     }
  //   }
  render() {
    const { name, department, salary, id } = this.props;
    const { test, isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card" >
                <div
                style={isVisible ? {backgroundColor : "#62848d"} : null}
                  className="card-header d-flex justify-content-between"
                  onClick={this.onClickEvent.bind(this, 34)}
                >
                  <h4 className="d-inline">{name}</h4>
                  <i
                    className="far fa-trash-alt"
                    onClick={this.onDeleteUser.bind(this,dispatch)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş: {salary}</p>
                    <p className="card-text">Departman: {department}</p>
                    <p className="card-text">Id: {id}</p>
                    <p>{test} </p>
                    <p>{isVisible} </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default User;
