import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login.js';
import LoginLogout from './loginlogout.js';


class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rowbanner">
          <div className="leftbanner">{this.props.user ? `Current User: ${this.props.user}` : ''}</div>
          {console.log(this.props.user)}
          <div className="middlebanner">
          <Link to="/class" className="linkbutton"> Classes </Link>
          <Link to="/students" className="linkbutton"> Students </Link>
          <LoginLogout onClick={this.props.onClick} authed={this.props.auth} user={this.props.user} type={this.props.type} />
          {/* <Link to="/login" className="linkbutton"> Login </Link>
          <button className="linkbutton" name="logout" onClick={this.props.onClick}> Logout </button> */}
          </div>
          
      
      </div>
    );
  }
}

export default Banner;