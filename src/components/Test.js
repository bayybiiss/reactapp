import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }
    componentDidMount = (e) => {
      console.log("componenentDidMount");
      this.setState({
        a:20
      })
    }

    componentDidUpdate = (prevProps, prevState) => {
          console.log("companentDidUpdate")  
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return false;
    }
    
  render() {
    console.log("render")
    return (
      <div>
        
      </div>
    )
  }
}
export default  Test;