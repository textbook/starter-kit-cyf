/* eslint-disable react/prop-types */
import React from "react";
import "./index.css"

function StudentsList(props) {
  // console.log(props.students);
  return (
    <div>
      <table className="absentTable">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.students &&
            props.students.map(student => (
              <tr key={student.id}>
                <td> {student.name} </td>
              </tr>
            ))}
          <tr className="total">
            <td>Total :
            {props.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
