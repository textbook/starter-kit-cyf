import React, { Component } from "react";
import StudentsList from "./StudentsList";
import StudentsAbsents from "./StudentsAbsents";
import FakeUsers from "../../fakeData.json";
import "./index.css";

class MentorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => this.setState({ students: data }));
  }

  render() {
    return (
      <main className="main">
        <h1>Attendance Register</h1>
        <section className="studentsList">
          <h2>Students in Class</h2>
          <StudentsList students={FakeUsers} />
        </section>
        <section className="studentsList">
          <h2>Students Absents</h2>
          <StudentsAbsents students={FakeUsers} />
        </section>
      </main>
    );
  }
}

export default MentorHome;
