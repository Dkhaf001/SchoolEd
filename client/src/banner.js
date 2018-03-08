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
        
          <Link to="/"> Home </Link>
          <Link to="/class"> Classes </Link>
          <Link to="/students"> Students </Link>
          <Link to="/login"> Login </Link>
          <button name="logout" onClick={this.props.onClick}> logout </button>
          {console.log(this.props)}
          
      
      </div>
    );
  }
}

export default Banner;