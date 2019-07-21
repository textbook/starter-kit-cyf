import React, { Component, Fragment } from "react";
import StudentsList from "../Mentor/StudentsList";
import StudentsAbsents from "../Mentor/StudentsAbsents";
import "../Mentor/index.css";

export class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewDisplayed: false
    };
  }
  displayView = e => {
    this.setState({ isViewDisplayed: !this.state.isViewDisplayed });
    this.props.handleView(this.props.session.date);
  };

  render() {
    const {
      attendingStudents,
      totalAttendingStudents,
      absentStudents,
      totalAbsentStudents,
      proportion
    } = this.props;
    const { _id, date, city, name, session } = this.props.session;
    return (
      <Fragment>
        <tr key={_id}>
          <td>{date}</td>
          <td>
            {name} - {session}
          </td>
          <td>{city}</td>
          <td>
            <button onClick={this.displayView} className="nav-btn-help">
              {this.state.isViewDisplayed ? " X " : " View "}
            </button>
          </td>
        </tr>
        <tr>
          {" "}
          <div className="row">
            {this.state.isViewDisplayed && (
              <div className="xs-col-12" style={divStyle}>
                <div className="row">
                  <section className="md-col-6">
                    <h4>Students in Class</h4>
                    <p>Total : {totalAttendingStudents}</p>
                    <ul>
                      {attendingStudents.map(student => (
                        <li key={student._id}>{student.name}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="md-col-6">
                    <h4>Students Absents</h4>
                    <p>Total : {totalAbsentStudents}</p>
                    <ul>
                      {absentStudents.map(student => (
                        <li key={student._id}>{student.name}</li>
                      ))}
                    </ul>
                  </section>
                </div>
                <br />
                <p>Attendance Percentage : % {proportion}</p>
              </div>
            )}
          </div>
        </tr>
      </Fragment>
    );
  }
}

const divStyle = { width: "100%" };

export default TableRow;
