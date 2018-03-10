import React, { Component } from 'react';
import Sidenav from '../sidenav.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class SelectedClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      rendering: '',
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/class', { params: { email: this.props.user, type: this.props.type } })
      .then(({data}) => {
        this.setState({ classes: data });
      })
      .catch(() => {
        console.log('error');
      });
  }

  render() {
    return (
      <div>
      <p>Render Classes Here</p>
      <div className="container">
      <Sidenav authed={this.props.auth} user={this.props.user} type={this.props.type} />
      </div>
      </div>
    );
  }
}