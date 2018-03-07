import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login.js';



class Banner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="rowbanner">
        
          <Link to="/"> Home </Link>
          <Link to="/students"> Students </Link>
          <Link to="/login"> Login </Link>
          <Link to="/logout"> Logout </Link>
          
      
      </div>
    );
  }
}

export default Banner;