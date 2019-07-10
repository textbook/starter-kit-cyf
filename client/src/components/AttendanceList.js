import React from "react";

export default function AttendanceList(props) {
  const { module } = props;
  return (
    <div>
      <ul>
        <li>City : {module.city}</li>
        <li>Module : {module.name}</li>
        <li>Session : {module.session}</li>
        <li>Date : {module.date}</li>
      </ul>
      <h3>Attending students</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Time-in </th>
          </tr>
          {module.attendance
            .filter(
              user => user.status == "STUDENT" && user.isAttended == true
            )
            .map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.timeOfArrival}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>Missing students</h3>
      {module.attendance
        .filter(user => user.status == "STUDENT" && user.isAttended != true)
        .map(user => (
          <ul>
            <li key={user.id}>{user.name}</li>
          </ul>
        ))}

      <h3>Attending mentors</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Time-in </th>
          </tr>
          {module.attendance
            .filter(
              user => user.status == "MENTOR" && user.isAttended == true
            )
            .map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.timeOfArrival}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <h3>Missing MENTORS</h3>
      {module.attendance
        .filter(user => user.status == "MENTOR" && user.isAttended != true)
        .map(user => (
          <ul>
            <li key={user.id}>{user.name}</li>
          </ul>
        ))}
      <hr />
    </div>
  );
}
