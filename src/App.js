import React, { Component } from "react";
import Home from './components/home.js';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Testing from "./testing";
import Banner from "./banner.js";
import Login from "./components/login.js";
import Logintest from "./components/logintest.js";
import Classtracker from './components/classtracker.js';
import Selectedclass from './components/selectedclass.js';
import Selectedstudent from './components/selectedstudent.js';
import View from './View.js'

import decode from "jwt-decode";
import "./style.css";
import SelectedStudent from "./components/selectedstudent.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderpath: "login",
      rendercomponent: "Home"
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  }
  
  onClickHandler(e) {
    if (e.target.name === "signin") {
        //axios get /
        axios.get('/')
        .then(()=> {
          this.setState({
            render: "Home"
          })
        })
      console.log('signing in');
    } else if (e.target.name === 'create') {
       //axios request to controller to handle create
      console.log('creating');
    }
  }
  

  render() {
    return (
      <Router>
        <div className="App">
          <Banner />
          {this.state.render === 'Home' && <Home />}
          <Route
            path="/login"
            render={props => <Login change={this.onChangeHandler} click={this.onClickHandler} />}
          />
          <Route path="/logout" component = {Home} />
          <Route path="/class" component = {Selectedclass} />
          <Route path="/students" component = {SelectedStudent} />
          {/* <Selectedstudent /> */}
          <View renderpath={this.state.renderpath} rendercomponent={this.state.rendercomponent} />
          <Switch />
          <Testing />
        </div>
      </Router>
    );
  }
}

export default App;
