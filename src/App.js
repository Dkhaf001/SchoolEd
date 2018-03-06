import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Testing from "./testing";
import Banner from "./banner.js";
import Login from './components/login.js';
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};

    this.onChangeHandler = this.onChangeHandler.bind(this);
  
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  }



  render() {
    return (
      <Router>
      <div className="App">
        <Banner />
      <Route path="/login" render={props => (
                <Login
                  change={this.onChangeHandler}
                />
              )}
              />
        <Switch>
          </Switch>	      

        <Testing />
      </div>
      </Router>
    );
  }
}

export default App;

