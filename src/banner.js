import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class Banner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        
          <Link to="/"> Home </Link>
          <Link to="/students"> Students </Link>
          <Link to="/login"> Login </Link>
        
      </div>
    );
  }
}

export default Banner;