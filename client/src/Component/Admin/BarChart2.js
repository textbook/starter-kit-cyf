import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    console.log(this.props.students);
    const data = this.props.students.map(student => {
      return {
        name: student.name,
        "%": Number(student.attendanceRate)
      };
    });
    return (
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 10,
          bottom: 120
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="%" fill="#8884d8" barSize={30} />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}
