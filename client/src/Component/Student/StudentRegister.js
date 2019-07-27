import React, { Component } from "react";
import "./index.css";

class StudentRegister extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <main className="mainAttendance">
        <h1>Welcome Student, </h1>
        <div className="attendance">
          <h2>Your attendance has been registered !</h2>
        </div>
        <h2>Enjoy your class.</h2>

      </main>
    );
  }
}

export default StudentRegister;
