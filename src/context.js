import axios from 'axios';
import React, { Component } from 'react'


const UserContext = React.createContext();
//Provider(sağlayıcı), Consumer(tüketici) 

const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter(user=> action.payload !== user.id)
      }
    case "ADD_USER" : 
      return{
          ...state,
          users: [...state.users,action.payload]
        }
      default:
        return state
  }
}

export  class UserProvider extends Component {
    state = {
        users: [],
        dispatch:action=>{
          this.setState(state => reducer(state,action))
        }
      };
    componentDidMount = async () => {
      const response = await axios.get("http://localhost:3000/users");
      this.setState({
        users: response.data
      })
      console.log(response);
    }
      
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;


/*
state={
  a:10,
  b:20,
  c:30
}

{
  b:20,
  c:30,
  a:20
}

*/