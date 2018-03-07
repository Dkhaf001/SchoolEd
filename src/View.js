import React, { Component } from "react";
import Login from "./components/login.js";
import Classtracker from "./components/classtracker.js";
import Selectedclass from "./components/selectedclass.js";
import Selectedstudent from "./components/selectedstudent.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>     
        {console.log(this.props)}
        <Route path={`/${this.props.rendering}`} component={this.props.rendering} />
      </div>
    );
  }
}

export default View;
