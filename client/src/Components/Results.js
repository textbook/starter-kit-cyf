import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getRole, logout } from '../Auth/index';
import Header from './Header';

function createData(name, pts) {
  return { name, pts };
}

const rows = [
  createData('Bart', 89),
  createData('Mohammad', 82),
  createData('Joan', 78),
  createData('Elamin', 73),
  createData('Miles', 68)
];

class Results extends Component {
  render() {
    const role = getRole();
    return (
      <div className="App">
        <header className="App">
          <Header title="Results" />
        </header>
        <div className="Background-design" />
        <div className="Final-score">
          
            <input placeholder="Final score for" className="score" />
            <button type="submit" className="score score-enter">
              Enter
            </button>
          
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

        <div className="Add-Enter">
          {(role === 'student' || role === 'leadmentor') && (
            <Link
              className="Add-results"
              to={
                role === 'student'
                  ? '/play'
                  : role === 'leadmentor'
                  ? '/createquiz'
                  : null
              }
            >
              <Button variant="outlined" color="default">
                {role === 'student' ? 'Play Quiz' : 'Create Quiz'}
              </Button>
            </Link>
          )}
          <Button variant="outlined" color="default" onClick={() => logout()}>
            Log out
          </Button>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    );
  }
}

export default withRouter(Results);
