import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login.js';



class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rowbanner">
          <p>{this.props.user}</p>
          {console.log(this.props.user)}
          {/* <Link to="/"> Home </Link> */}
          <Link to="/class"> Classes </Link>
          <Link to="/students"> Students </Link>
          <Link to="/login"> Login </Link>
          {/* <Link to="/logintwo"> Logintwo </Link> */}
          <button className="linkbutton" name="logout" onClick={this.props.onClick}> Logout </button>
          {console.log(this.props)}
          
      
      </div>
    );
  }
}

export default Banner;