import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core"
import axios from "axios"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { getRole, logout } from "../Auth/index"
import Header from "./Header"

class Results extends Component {
  state = {
    value: "",
    results: null
  }

  handleClick = () => {

    fetch(`/api/result/${this.state.value}`).then(res => res.json()).then(res => {

      if (res.length > 0) {
        const { results } = res[0]
        return this.setState({ results })
      }
  }
    )
    
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {    
    const role = getRole()
    return (
      <div className="App">
        <header className="App">
          <Header title="Results" />
        </header>
        <div className="Background-design" />
        <div className="Final-score">
          <input
            placeholder="Final score for"
            value={this.state.value}
            className="score"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="score score-enter"
            onClick={this.handleClick}
          >
            Enter
          </button>
        </div>
        {this.state.results && (
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
                    {this.state.results.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right" style={{color: row.point > 70 ? 'green' : row.point > 40 ? 'blue' : 'red'}}>{row.point}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Typography>
            </Paper>
          </div>
        )}

        <div className="Add-Enter">
          {(role === "student" || role === "leadmentor") && (
            <Link
              className="Add-results"
              to={
                role === "student"
                  ? "/play"
                  : role === "leadmentor"
                  ? "/createquiz"
                  : null
              }
            >
              <Button variant="outlined" color="default">
                {role === "student" ? "Play Quiz" : "Create Quiz"}
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
    )
  }
}

export default withRouter(Results)
