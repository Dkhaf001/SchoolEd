import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login.js';



class LoginLogout extends Component {
  constructor(props) {
    super(props);
  }


   render() {
     return(
       <div>
         {this.props.user ? <button className="linkbutton" name="logout" onClick={this.props.onClick}> Logout </button> : <Link to="/login" className="linkbutton"> Login </Link>}
      </div>
     )}
}

export default LoginLogout;