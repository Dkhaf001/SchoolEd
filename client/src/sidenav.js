import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Sidenav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
    <div className="sidenav">
      <h2> Classes </h2>
      <div className="linkbuttonsidebar">
      <a href="#">Biology</a>
      <a href="#">Chemistry</a>
      <a href="#">Physics</a>
      <a href="#">English</a>
      </div>
    </div>



    );
  }
}

export default Sidenav;


// <div class="main">
//   <h2>View Here</h2>
 
// </div>


