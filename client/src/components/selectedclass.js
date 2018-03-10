import React, { Component } from "react";
import Sidenav from "../sidenav.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class SelectedClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      rendering: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      rendering: e.target.value
    });
    console.log(e.target.value);
    console.log(this.state);
  }

  componentDidMount() {
    axios.get("/api/class", {
        params: { email: this.props.user, type: this.props.type }
      })
      .then(classes => {
        let lectureList = [];
        for (let i = 0; i < classes.data.length; i++) {
          axios.get("/api/lecture", { params: { class_id: classes.data[i].id } })
          .then(lectures => {
            lectureList.push(lectures.data);
            // console.log("lectures.datat :", lectures.data);
            // console.log("lectureList :", lectureList);
              let topics = [];
              for (let j = 0; j < lectureList.length; j++) {
                axios.get("/api/topic", {
                    params: { lecture_id: lectureList[i].id }
                  })
                  .then(topics => {
                    this.setState({
                      classes: classes.data,
                      lectures: lectures.data,
                      topics: topics.data
                    });
                  });
              }console.log(this.state);
            });
        }
      })
      .catch(() => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <h1 className="topmargin">Class List</h1>
        <div className="classlist">
          {console.log(this.state)}
          {this.state.classes && this.state.classes.map((aclass, key) => (
              <div
                onClick={this.handleClick}
                value={aclass.name}
                className="classlist"
                style={{ width: 110 }}
                key={key}
              >
                {aclass.name}
                {'  '}
                {this.state.lectures && this.state.lectures.map((alecture, key) => (
                  <div
                    onClick={this.handleClick}
                    value={alecture.name}
                    className="lecturelist"
                    style={{ width: 110 }}
                    key={key}
                  >
                  {alecture.name}
                  {'  '}
                  {this.state.topics && this.state.topics.map((atopic, key) => (
                    <div
                    onClick={this.handleClick}
                    value={atopic.name}
                    className="topiclist"
                    style={{ width: 110 }}
                    key={key}
                  >
                  {atopic.name}
                  {console.log(atopic.name)}
                  </div>
                  ))}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="container">
          <Sidenav
            authed={this.props.auth}
            user={this.props.user}
            type={this.props.type}
            />
        </div>
      </div>
    );
  }
}
