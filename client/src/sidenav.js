import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';



class Sidenav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      rendering: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.setState({
      rendering: e.target.value
    })
    console.log(e.target.value);
    console.log(this.state);
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
    
    <div className="sidenav">
      <h2> Classes </h2>
      <div className="linkbuttonsidebar">
      {this.state.classes && this.state.classes.map((aclass, key) =>
         <button onClick={this.handleClick} value={aclass.name} className="linkbutton" style={{width: 110}} key={key}>{aclass.name}</button>
      )}
      </div>
    </div>



    );
  }
}

export default Sidenav;


// <div class="main">
//   <h2>View Here</h2>
 
// </div>


