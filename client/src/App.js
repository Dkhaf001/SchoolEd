import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Home from './components/home.js';
import axios from "axios";
import Testing from "./testing";
import Banner from "./banner.js";
import Login from "./components/login.js";
import Classtracker from './components/classtracker.js';
import Selectedclass from './components/selectedclass.js';
import Selectedstudent from './components/selectedstudent.js';
import View from './View.js'
import Sidenav from './sidenav.js';
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      user: ""
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
        console.log('routing to /api/login');
        axios.get('/api/auth', { params: { email:this.state.email, password:this.state.password } })
        .then(({data})=> {
          console.log(data);
          this.setState({
            type: data,
            auth: true,
            user: this.state.email
          })
        })
      console.log('signing in');
    } else if (e.target.name === 'createstudent') {
       //axios request to controller to handle create
       console.log('username: ', this.state.email, 'password: ', this.state.password);
       axios.post('/api/auth', { email:this.state.email, password:this.state.password, type:0 })
       .then(() => {
        axios.get('/api/auth', { params: { email:this.state.email, password:this.state.password } })
        .then((type)=> {
          console.log(type);
          this.setState({
            type: type,
            auth: true,
            user: this.state.email
          })
        })
         console.log('creating');
       })
    } else if (e.target.name === 'createteacher') {
        //axios request to controller to handle create
        console.log('username: ', this.state.email, 'password: ', this.state.password);
        axios.post('/api/auth', { email:this.state.email, password:this.state.password, type:1 })
          .then(() => {
            axios.get('/api/auth', { params: { email:this.state.email, password:this.state.password } })
              .then((type)=> {
                console.log(type);
                this.setState({
                  type: type,
                  auth: true,
                  user: this.state.email
                });
              
              });
          })
          .catch(() => {
            alert('User already exists!');
            console.log('error');
          });
    } else if (e.target.name === 'logout') {
      console.log('logout frontend logic');
      axios.delete('/api/')
      .then(() => {
        this.setState({
          auth: false,
          user: ""
        })
        console.log('session destroyed');
      }).catch( error => {
        console.log('session destroyed!');
        res.redirect('/api/login');
      });
    }
  };

  

  /* {this.state.render === 'Home' && <Home />} */



  render() {
    return (
      <Router>
        <div className="App">
          <Banner authed={this.state.auth} user={this.state.user} onClick={this.onClickHandler}/>
          <Switch>
          {/* <Route
            path="/logintwo"
            render={props => <Classtracker change={this.onChangeHandler} click={this.onClickHandler} />}
          /> */}
          <Route
            path="/login"
            render={props => <Login change={this.onChangeHandler} click={this.onClickHandler} />}
          />
          <Route authed={this.state.auth}
           path="/class" 
           render={props =>  (this.state.auth === true) ? (
            <Selectedclass authed={this.state.auth} user={this.state.user} type={this.state.type}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
          <Route authed={this.state.auth}
           path="/students" 
           render={props =>  (this.state.auth === true) ? (
            <Selectedstudent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
          </Switch>
          {/* <Testing /> */}
        </div>
      </Router>
    );
  }
}

export default App;
