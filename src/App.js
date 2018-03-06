import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Testing from "./testing";
import Banner from "./banner.js";
import Login from './components/banners/login.js';
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Banner />
        <Switch>
          </Switch>	      

        <h1 className="App-title">Welcome to React</h1>
        <p> hey </p>
        <Testing />
      </div>
      </Router>
    );
  }
}

export default App;

{/* -          <Route path="/main" component={View} />	+      <Route path="/main" component={View} /> */}
{/* -          <Route path="/login" component={Login} />	+            <Route  path="/login"
+              render={props => (
+                <Login
+                  change={this.onChangeHandler}
+                  click={this.onClickHandler}
+                />
+              )}
+            /> */}