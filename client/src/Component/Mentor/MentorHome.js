import React, { Component } from "react";
import StudentsList from "./StudentsList";
import StudentsAbsents from "./StudentsAbsents";
import FakeUsers from "../../fakeData.json";
import "./index.css";
import dayjs from "dayjs";

class MentorHome extends Component {
  state = {
      students: "",
      selectedSession: "today"
    };

  componentWillMount = async () => {
    await this.fetchData(this.state.selectedSession);
    if (this.state.students && this.students.session) {
      this.startTimer(session)
    }
     
  }
  startTimer = (selectedSession) => {
    this.autoUpdate = setInterval(
          this.fetchData(selectedSession),
          1000
        );
  }
  fetchData = async selectedSession => {
    return fetch(`api/attendance?date=${selectedSession}`)
      .then(data => data.json())
      .then(data => this.setState({ students: data }));
  };
  selectSession = e => {
    if (e.target && e.target.value) {
      // console.log("form function", e.target.value, this.state.selectedSession);
      const today = dayjs().format("DD/MM/YYYY");
      const selectedSession = e.target.value;
      if (selectedSession === today) {
        this.startTimer(selectedSession)
      } else {
        this.fetchData(selectedSession);
      }
      this.setState({ selectedSession });
    }
  };

  render() {
    const {
      sessions,
      name,
      session,
      date,
      attendingStudents,
      totalAttendingStudents,
      absentStudents,
      totalAbsentStudents,
      proportion
    } = this.state.students;
    const today = dayjs().format("DD/MM/YYYY");
    {
      console.log(
        sessions,
        name,
        session,
        date,
        attendingStudents,
        totalAttendingStudents,
        absentStudents,
        totalAbsentStudents,
        proportion
      );
      // console.log("selected", this.state.selectedSession);
    }
    return (
      <main className="main">
        <h1>Attendance Register</h1>
        <br />
        <p>Today : {today}</p>
        {session ? (
          <p>
            {name} - {session}
          </p>
        ) : null}
        <p>Selected Date : {date ? date : today}</p>
        <div>
          Choose a session date :
          <select
            onChange={this.selectSession}
            value={this.state.selectedSession}
            name="session"
          >
            <option value={today}>Today</option>}
            {sessions &&
              sessions.map(session => {
                return (
                  <option value={session.date}>
                    {session.date} : {session.name} - {session.session}
                  </option>
                );
              })}
          </select>
        </div>
        {session ? (
          <div>
            <section className="studentsList">
              <h2>Students in Class</h2>
              <StudentsList
                // students={FakeUsers}
                students={attendingStudents}
                total={totalAttendingStudents}
              />
            </section>
            <section className="studentsList">
              <h2>Students Absents</h2>
              <StudentsAbsents
                // students={FakeUsers}
                students={absentStudents}
                total={totalAbsentStudents}
              />
            </section>
            <br />
            <p>Attendance Percentage : % {proportion}</p>
          </div>
        ) : (
          <p>There is no results for today!, please select another date</p>
        )}
      </main>
    );
  }
}

export default MentorHome;
