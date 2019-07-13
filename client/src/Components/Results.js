import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';
import logo from '../logo.png';

function createData(name, pts) {
  return { name, pts };
}

const rows = [
  createData('Bart', 89),
  createData('Mohammad', 82),
  createData('Joan', 78),
  createData('Elamin', 73),
  createData('Miles', 68),
  createData('Kadir', 67),
  createData('Ermi', 65)
];

class Results extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="Title">Assesment Quiz App</h3>
        </header>
        <div className="Final-score">
          <Paper className="score" >
            <Typography variant="h4" component="h3" color="default">
              Final Score
            </Typography>
          </Paper>
        </div>
        <div className="Table">
          <Paper className="Paper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key="">
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.pts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>

      </div>
    );
  }
}

export default Results;
