import { Button, Paper, Typography } from "@material-ui/core"
import React, { Component } from "react"
import Header from "./Header"
class TakeQuiz extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Final-score">
          {/* <a href="" className="Previous">
            {' '}
            &laquo; Previous
          </a> */}

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
                  <Button variant="contained" className="">
                    <p>charAt()</p>
                  </Button>
                  <p>B</p>
                  <Button variant="contained" className="">
                    <p>charCodeAt()</p>
                  </Button>
                </div>
                <div className="choices">
                  <p>C</p>
                  <Button variant="contained" className="">
                    <p>concat()</p>
                  </Button>
                  <p>D</p>
                  <Button variant="contained" className="">
                    <p>indexOf()</p>
                  </Button>
                </div>
              </div>
            </Typography>
          </Paper>

          {/* <a href="" className="Next">
            {' '}
            Next &raquo;
          </a> */}
        </div>
      </div>
    )
  }
}

export default TakeQuiz
