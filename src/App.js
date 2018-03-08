import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Home from './components/home.js';
import axios from "axios";
import Testing from "./testing";
import Banner from "./banner.js";
import Login from "./components/login.js";
import Logintest from "./components/logintest.js";
import Classtracker from './components/classtracker.js';
import Selectedclass from './components/selectedclass.js';
import Selectedstudent from './components/selectedstudent.js';
import View from './View.js'
import SelectedStudent from "./components/selectedstudent.js";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // componentWillMount(){
  //   //check to see if logged in through session
  //   axios.get('/')
  //   .then(() => {
  //     this.setState({
  //       auth: "true"
  //     })
  //   })
  //   console.log('signing in');
    
  // }



  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }
  
  onClickHandler(e) {
    if (e.target.name === "signin") {
        console.log('routing to /');
        axios.get('/')
        .then(()=> {
          this.setState({
            auth: "true"
          })
        })
      console.log('signing in');
    } else if (e.target.name === 'create') {
       //axios request to controller to handle create
       console.log('username: ', this.state.email, 'password: ', this.state.password);
       axios.post('http://localhost:9001/api/signup', { email:this.state.email, password:this.state.password })
       .then(() => {
         
         console.log('creating');
       })
    }
  }

  

  /* {this.state.render === 'Home' && <Home />} */



  render() {
    return (
      <Router>
        <div className="App">
          <Banner />
          <Switch>
          <Route
            path="/login"
            render={props => <Login change={this.onChangeHandler} click={this.onClickHandler} />}
          />
          <Route path="/logout" component = {Home} />
          <Route path="/class" component = {Selectedclass} />
          <Route path="/students" component = {SelectedStudent} />
          </Switch>
          <Testing />
        </div>
      </Router>
    );
  }
}

export default App;
