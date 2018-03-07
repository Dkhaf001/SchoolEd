import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    }
  }




  render() {
    return (
      <div align="center">
        <input type="email" name="email" placeholder="Email" onChange={this.props.change} />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={this.props.change} />
        <br />
        <Link to="/"><button name="signin" onClick={this.props.click}>Sign In</button></Link>
        <Link to="/"><button name="create" onClick={this.props.click}>Create Account</button></Link>
      </div>
    );
  }
}

export default Login;