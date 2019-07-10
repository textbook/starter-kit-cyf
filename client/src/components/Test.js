import React, { Component } from 'react'
import users from "../data/users.json";
import modules from "../data/modules.json";

export class Test extends Component {
  render() {
    return (
      <div>
        <p>user list</p>
        <table>
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
        <p>attendance list</p>
        <table>
          <tbody>
            <tr>city : {modules[0].city}</tr>
            <tr>module : {modules[0].name}</tr>
            <tr>session : {modules[0].session}</tr>
            <tr>date : {modules[0].date}</tr>
            <tr>attending students</tr>
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
            <tr>missing students</tr>
            {modules[0].attendance
              .filter(
                user => user.status == "STUDENT" && user.isAttended != true
              )
              .map(user => (
                <tr>
                  <td>{user.name}</td>
                </tr>
              ))}

            <tr>attending mentors</tr>
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
            <tr>missing MENTORS</tr>
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

