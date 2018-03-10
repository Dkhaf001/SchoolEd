import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login.js';



class LoginLogout extends Component {
  constructor(props) {
    super(props);
  }


   render() {
     return(
       <div className="linkbutton">
         {this.props.user ?
           <a name="logout" onClick={this.props.onClick}> Logout </a> 
           : 
           <Link to="/login"> Login </Link>}
      </div>
     )}
}

export default LoginLogout;