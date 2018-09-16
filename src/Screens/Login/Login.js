import React, { Component } from "react";
// import logo from "./logo.svg";
import "../../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
    this.toggle=this.toggle.bind(this);
    this.login=this.login.bind(this)
  }
  toggle()
  {
    const {toggle}=this.state;

    if(toggle)
    {
      const {signup} = this.props;
      const firstName = document.getElementById("first").value;
      const lastName = document.getElementById("last").value;
      const password = document.getElementById("email").value;
      const email = document.getElementById("password").value;
      signup(firstName,lastName,password,email)


      this.setState({toggle:false})
    }
    else
    {
      this.setState({toggle:true});
  }

  }
  login()
  {
    const {login1}=this.props;
    const email= document.getElementById("emaillogin").value;
    const password=document.getElementById("passworlogin").value;
    login1(email,password);
    

    

  }
  render() {
    const { toggle } = this.state;

    return (

      <div className="App">
        
    {!toggle &&    <div className="Login">
          <input type="text" id="emaillogin" placeholder="Enter Email" />
          <input type="password" id="passworlogin" placeholder="Enter Password" />
          <button onClick={this.login}> Login </button>
          <button onClick={this.toggle}> Sign Up </button>
    </div>} 
    



        {toggle &&<div className="SignUp" >
        <input type="text" id="first" placeholder="First Name" />
        <input type="text" id="last" placeholder="Last Name" />
        <input type="text" id="email" placeholder="Email" />
        
          <input type="password" id="password" placeholder="Password" />
          <button onClick={this.toggle}>SignUp </button>
        </div>
        }
      </div>
    );
  }
}

export default Login;
