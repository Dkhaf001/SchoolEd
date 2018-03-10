import React, { Component } from 'react';
import Sidenav from '../sidenav.js';

export default class SelectedClass extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container">
      <Sidenav authed={this.props.auth} user={this.props.user} type={this.props.type} />
      </div>
    );
  }
}