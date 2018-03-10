import React, { Component } from 'react';

class Classlist extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="classlist">
        <button>{this.props.classlist}</button>
      </div>
    )
  }
}

export default Classlist;