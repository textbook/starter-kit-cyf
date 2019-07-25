import React, { Component, Fragment } from "react";
const moment = require("moment");

export class ModuleTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewDisplayed: false
    };
  }
  displayView = e => {
    this.setState({ isViewDisplayed: !this.state.isViewDisplayed });
  };

  render() {
    console.log(this.props.module);
    const { name, attendance, absence, attendanceRate } = this.props.modul;
    const { id } = this.props;
    return (
      <Fragment>
        <tr key={id} onClick={this.displayView} className="student-name">
          <td>{name}</td>
          <td>{attendance.length}</td>
          <td>% {attendanceRate}</td>
          <td>{absence.length}</td>
        </tr>
        {this.state.isViewDisplayed && attendance && (
          <tr>
            <td colspan="2">
              <h4>Attendance</h4>

              <ul>
                {attendance.map(student => (
                  <li key={id + 1}>{student.name}</li>
                ))}
              </ul>
            </td>
            <td colspan="2">
              <h4>Absence</h4>
              <ul>
                {absence.map(student => (
                  <li key={id + 10001}>{student.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        )}
      </Fragment>
    );
  }
}

const divStyle = { width: "100%" };

export default ModuleTableRow;
