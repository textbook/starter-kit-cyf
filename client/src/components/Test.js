import React, { Component } from "react";
import users from "../data/users.json";
import modules from "../data/modules.json";

export default class Test extends Component {
  state = {
    users: users,
    modules: modules
  };
  render() {
    const { users, modules } = this.state;

    return (
      <div>
        <h2>User list</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user["id"]}>
                <td>{user["name"]}</td>
                <td>{user["city"]}</td>
                <td>{user["status"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Attendance list</h2>
        <table>
          <tbody>
            <tr>City : {modules[0].city}</tr>
            <tr>Module : {modules[0].name}</tr>
            <tr>Session : {modules[0].session}</tr>
            <tr>Date : {modules[0].date}</tr>
            <h3>Attending students</h3>
            <tr>
              <th>Name</th>
              <th>Time-in </th>
            </tr>
            {modules[0].attendance
              .filter(
                user => user.status == "STUDENT" && user.isAttended == true
              )
              .map(user => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.timeOfArrival}</td>
                </tr>
              ))}
            <h3>Missing students</h3>
            {modules[0].attendance
              .filter(
                user => user.status == "STUDENT" && user.isAttended != true
              )
              .map(user => (
                <tr>
                  <td>{user.name}</td>
                </tr>
              ))}

            <h3>Attending mentors</h3>
            <tr>
              <th>Name</th>
              <th>Time-in </th>
            </tr>
            {modules[0].attendance
              .filter(
                user => user.status == "MENTOR" && user.isAttended == true
              )
              .map(user => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.timeOfArrival}</td>
                </tr>
              ))}
            <h3>Missing MENTORS</h3>
            {modules[0].attendance
              .filter(
                user => user.status == "MENTOR" && user.isAttended != true
              )
              .map(user => (
                <tr>
                  <td>{user.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
