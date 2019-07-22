import { Button, Paper, Typography, Grid } from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from "react"
import Header from "./Header"
class TakeQuiz extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Background-design" />
        <div className="Final-score">
          <a href="" className="Previous">
            {' '}
            {/* &laquo;  */}
            Previous
          </a>

          <Paper className="Paper-one">
            <Typography variant="h6" component="h6">
              <p className="Questions">Question 1/10</p>
              <Paper className="Paper-two">
                <p className="Questions">
                  Which of the following function of String object returns a
                  number indicating the Unicode value of the character at the
                  given index?
                </p>
              </Paper>
              <div>
                <div className="choices">
                  <p>A</p>
                  <Button variant="contained" color="primary">
                    <p>charAt()</p>
                  </Button>
                  <p>B</p>
                  <Button variant="contained" color="primary">
                    <p>charCodeAt()</p>
                  </Button>
                </div>
                <div className="choices">
                  <p>C</p>
                  <Button variant="contained" color="primary">
                    <p>concat()</p>
                  </Button>
                  <p>D</p>
                  <Button variant="contained" color="primary">
                    <p>indexOf()</p>
                  </Button>
                </div>
              </div>
            </Typography>
          </Paper>

          <a href="" className="Next">
            {' '}
            Next
             {/* &raquo; */}
          </a>
        </div>
        <div className="Add-Enter">
          <Link className="" to="/">
            <Button variant="outlined" color="default">
              Cancel and Return
                </Button>
          </Link>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    )
  }
}

export default withRouter(TakeQuiz);
