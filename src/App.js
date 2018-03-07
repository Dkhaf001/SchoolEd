import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Testing from "./testing";
import Banner from "./banner.js";
import Login from './components/login.js';
import Logintest from './components/logintest.js';
import decode from 'jwt-decode';
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

  // checkAuth = () => {
  //   const token = localStorage.getItem('token');
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   if (!token || !refreshToken) {
  //     return false;
  //   }
  //   try {
  //     const { exp } = decode(refreshToken);
  //     if (exp < new Date().getTime() / 1000) {
  //       return false;
  //     }

  //   } catch (e) {
  //     return false; 
  //   }


  //   return true;
  // }

  // AuthRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={props => (
  //     checkAuth() ? (
  //       <Component {...props} />
  //     ) : (
  //       <Redirect to={{ pathname: '/login' }} />
  //     ) 
  //   )} />
  // )



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
        <Logintest />
      </div>
      </Router>
    );
  }
}

export default App;

