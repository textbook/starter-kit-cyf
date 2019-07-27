import React, { Component } from "react";
import StudentsList from "./StudentsList";
import StudentsAbsents from "./StudentsAbsents";
import FakeUsers from "../../fakeData.json";
import "./index.css";
import dayjs from "dayjs";

class MentorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      sessions: "",
      selectedSession: "",
      selectedSessionDate: "today",
    };
  }

  componentWillMount() {
    //TODO : if there is no result do not start timer
    this.startTimer = setInterval(this.fetchData, 1000);
  }

  fetchData = async () => {
    fetch(`api/attendance?date=${this.state.selectedSessionDate}`)
      .then(data => data.json())
      .then(data => this.setState({ data: data }));
  };

  selectSession = e => {
    //if it is not today clear interval and fetch for selected date
    //if it is today start timer with today
    const selectedSessionDate = e.target.value;
    if (selectedSessionDate !== this.state.today) {
      clearInterval(this.startTimer);
      this.setState({ selectedSessionDate }, () =>
        this.fetchData(this.state.selectedSessionDate)
      );
    } else {
      this.setState({ selectedSessionDate }, () => this.startTimer);
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
    } = this.state.data;

    const today = dayjs().format("DD/MM/YYYY")
    return (
      <main className="main">

        <section className="register_Info">
          <h1>Attendance Register</h1>
          <p>Today : {today}</p>
          {session ? (
            <p>
              {name} - {session}
            </p>
          ) : null}
          <p>Selected Date : {date ? date : today}</p>
          <p>
            Choose a session date    <select
              onChange={this.selectSession}
              value={this.state.selectedSessionDate}
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
          </p>
        </section>
        {session ? (
          <div>
            <div className="table-Results">
              <section className="studentsList">
                <h2>Students in Class</h2>
                <StudentsList
                  students={attendingStudents}
                  total={totalAttendingStudents}
                />
              </section>
              <section className="studentsList">
                <h2 className="absent">Students Absents</h2>
                <StudentsAbsents
                  students={absentStudents}
                  total={totalAbsentStudents}
                />
              </section>
            </div>
            <p className="attPercentage">Attendance Percentage :  {proportion} %</p>
          </div>
        ) : (
            <p>There is no results for today!, please select another date</p>
          )}
      </main>
    );
  }
}

export default MentorHome;
