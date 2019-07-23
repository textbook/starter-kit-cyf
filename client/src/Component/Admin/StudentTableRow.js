import React, { Component, Fragment } from "react";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewDisplayed: false
    };
  }

  displayView = () => {
    this.setState({
      isViewDisplayed: !this.state.isViewDisplayed
    });
    this.props.handleStudentView(this.props.student.email);
  };
  render() {
    const { student } = this.props;
    return (
      <Fragment>
        <li
          key={student._id}
          className="nav-btn-help"
          onClick={this.displayView}
        >
          {student.name}
        </li>
        {this.state.isViewDisplayed && (
          <Fragment>
            <h6>Attendance : </h6>
            <h6>Total : {student.attendance.length}</h6>
            <h6>Attendance Rate : {student.attendanceRate}</h6>
            <ul>
              {student.attendance.map(session => {
                return (
                  <li key={session.id}>
                    {session.name} - {session.session} ({session.date})
                  </li>
                );
              })}
            </ul>
            <h6>Absence : </h6>
            <h6>Total : {student.absence.length}</h6>
            <ul>
              {student.absence.map(session => {
                return (
                  <li key={session.id}>
                    {session.name} - {session.session} ({session.date})
                  </li>
                );
              })}
            </ul>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
