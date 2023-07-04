import "./App.css";
import Navbar from "./components/Navbar";
import { Component } from "react";
import Users from "../src/components/Users";
import AddUser from "./components/AddUser";


class App extends Component {
  render() {
    // const test = 22;
    const isAuth = false;
    return (
      <div className="container ">
        
        {/* {1 + 1}
      <h4 style={{ color: "blue", fontSize: "30px" }}>App Component</h4>

      <h4 className="header">Deneme</h4>
      <h4>{"beyza".toUpperCase()}</h4>
      <h4>{test}</h4> */}

        <br></br>
        <AddUser></AddUser>
        <Navbar title="User App " />
        <br></br>
        <Users />
        <br></br>
        <div>{isAuth ? <p>Kullanıcı Kayıtlı</p> : null}</div>
      </div>
    );
  }
}
export default App;
