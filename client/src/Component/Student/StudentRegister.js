import React, { Component } from "react";
import "./index.css";
import imgSrc from "../../picture/user-check-solid.svg";

class StudentRegister extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {

    return (
      <main className="mainAttendance">
        <div className="registerTitle appNameBox">
          <h2><span className="appName">Regi</span><span className="appNameBack">Swift</span></h2>
          <img src={imgSrc} className="signImg" />
        </div>
        <div className="attendance">
          <h2>Your attendance has been registered !</h2>

          <h2>Enjoy your class.</h2>
        </div>
      </main>
    );
  }
}

export default StudentRegister;
