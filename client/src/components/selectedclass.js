import React, { Component } from 'react';
import Sidenav from '../sidenav.js';

export default class SelectedClass extends Component {
  render() {
    return (
      <div className="container">
      <Sidenav />
        <div className="row">
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
          <div className="col-md-4 selected-class-col">
            <h2>Topic</h2>
          </div>
        </div>
      </div>
    );
  }
}