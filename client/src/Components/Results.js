import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid
} from '@material-ui/core';
import logo from '../logo.png';
import Header from './Header';

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
        <header className="App">
          <Header />
        </header>
        <div className="Background-design" />
        <div className="Final-score">
          <Paper className="score">
            <Typography variant="h5" component="h4" color="primary">
              Final Score
            </Typography>
          </Paper>
        </div>
        <div className="table">
          <Paper className="Paper">
            <Typography variant="btitle1" component="h4" color="primary">
              <Table>
              
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Points</TableCell>
                  </TableRow>
                </TableHead>
             
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.pts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              
            </Table>
            </Typography>
          </Paper>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    );
  }
}

export default Results;
