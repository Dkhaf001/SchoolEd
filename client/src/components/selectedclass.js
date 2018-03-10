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

  componentWillMount() {
    axios.get("/api/class", {
        params: { email: this.props.user, type: this.props.type }
      })
      .then(classes => {
        let lectureList = [];
        for (let i = 0; i < classes.data.length; i++) {
          axios.get("/api/lecture", { params: { class_id: classes.data[i].id } })
          .then(lectures => {
            lectureList.push(lectures.data);
            console.log('lecturelist ',lectureList)
              let topicsList = [];
              for (let j = 0; j < lectureList.length; j++) {
                axios.get("/api/topic", {
                    params: { lecture_id: lectureList[j].id }
                  })
                  .then(topics => {
                    topicsList.push(topics);
                  });
                      this.setState({
                        classes: classes.data,
                        lectures: lectureList,
                        topics: topicsList
                      });
              }
              console.log('the state is ',this.state);
              
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
          {/* {console.log(this.state)} */}
          {this.state.classes && this.state.classes.map((aclass, key) => (
              <div
                // onClick={this.handleClick}
                value={aclass.name}
                className="classlist"
                // style={{ width: 110 }}
                key={key}
              >
                Class Name : {aclass.name}
                {'  '}
                {console.log(this.state.lectures)}
                {this.state.lectures && this.state.lectures.map((alecture, key) => (
                  
                  <div
                    // onClick={this.handleClick}
                    value={alecture.name}
                    className="lecturelist"
                    // style={{ width: 110 }}
                    key={key}
                  >
                  
                  {alecture[0].class_id === aclass.id ? `Lecture : ${alecture[0].name}` : null}
                  {'  '}
                  {this.state.topics && this.state.topics.map((atopic, key) => (
                    <div
                    // onClick={this.handleClick}
                    value={atopic.name}
                    className="topiclist"
                    // style={{ width: 110 }}
                    key={key}
                  >
                  Topic : {atopic[0].lecture_id === alecture.id ? atopic[0].name : null}
                
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
