import React, { Component } from 'react';
import Sidenav from '../sidenav.js';

export default class SelectedStudent extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <div className="container">
          <div className="row">
            <div className="col-md-4 class-tracker-col">
              <h2>Class</h2>
              <p>Performance</p>
              <h2>Topic</h2>
              <p>Performance</p>
            </div>
            <div className="col-md-4 class-tracker-col">
              <h2>Class</h2>
              <p>Performance</p>
              <h2>Topic</h2>
              <p>Performance</p>
            </div>
            <div className="col-md-4 class-tracker-col">
              <h2>Class</h2>
              <p>Performance</p>
              <h2>Topic</h2>
              <p>Performance</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}