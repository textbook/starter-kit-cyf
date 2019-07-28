import React, { Component } from "react";
import CreateSession from "./CreateSession";
import "./index.css";
import TableRow from "./TableRow";
import StudentTableRow from "./StudentTableRow";
import {
  TabContent,
  Table,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import ModuleTableRow from "./ModuleTableRow";
const dayjs = require("dayjs");
const moment = require("moment");

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      date: "",
      city: "",
      latitude: "",
      longitude: "",
      session: "",
      isStudentViewDisplayed: false,
      activeTab: "1"
    };
  }

  componentWillMount() {
    fetch(`api/personalAttendance`)
      .then(data => data.json())
      .then(data => this.setState({ data: data }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, date, city, session, latitude, longitude } = this.state;
    const reqBody = { name, date, session, city, latitude, longitude };
    const reqParams = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(reqBody)
    };
    fetch(`/api/createSession`, reqParams).then(res => {
      if (res.status == 200) {
        alert("New session created!");
      } else {
        alert("Session couldn't be created try again");
      }
    });
  };

  //For the tabs
  toggle = el => {
    if (this.state.activeTab !== el) {
      this.setState({
        activeTab: el
      });
    }
  };

  render() {
    const { students, sessions, modules } = this.state.data;
    sessions &&
      sessions.forEach(
        session =>
          (session.date = moment(session.date, "DD/MM/YYYY").format(
            "YYYY-MM-DD"
          ))
      );
    return (
      <main className="mainAdmin">
        <div className="mainAdmin-row">
          <h3>CodeYourFuture's Students</h3>
          <Table hover striped responsive>
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Attendance Rate</th>
                <th>Missed Module</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students
                  .sort((a, b) => {
                    return b.attendanceRate - a.attendanceRate;
                  })
                  .map(student => {
                    return (
                      <StudentTableRow
                        student={student}
                        handleStudentView={this.selectStudent}
                      />
                    );
                  })}
            </tbody>
          </Table>
        </div>

        <div className="mainAdmin-row sessionBox">
          <Nav tabs className="navBox">
            <NavItem className="navItem">
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                id="navLink"
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Sessions
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                id="navLink"
                onClick={() => {
                  this.toggle("2");
                }}
              >
                New Session
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                id="navLink"
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Modules
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="tabPane">
              <Row>
                <Col sm="12">
                  <Table striped hover>
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Module-Session</th>
                        <th scope="col">City</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions &&
                        sessions
                          .sort((a, b) => {
                            return new Date(a.date) > new Date(b.date) ? -1 : 1;
                          })
                          .map(session => {
                            //console.log(session)
                            return <TableRow session={session} />;
                          })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2" className="tabPane">
              <Row>
                <Col sm="12">
                  <Table>
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Create New Session</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CreateSession
                        name={this.state.name}
                        city={this.state.city}
                        date={this.state.date}
                        session={this.state.session}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                      />
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3" className="tabPane">
              <Row>
                <Col sm="12">
                  <Table striped hover>
                    <thead className="thead-dark">
                      <tr className="tr">
                        <th scope="col">Module</th>
                        <th scope="col">Attendance</th>
                        <th scope="col">Attendance Rate</th>
                        <th scope="col">Absence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modules &&
                        modules.map((modul, id) => {
                          return <ModuleTableRow modul={modul} id={id} />;
                        })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </main>
    );
  }
}

export default AdminHome;
