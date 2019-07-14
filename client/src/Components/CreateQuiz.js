import { Button, Paper, Typography } from "@material-ui/core"
import React, { Component } from "react"
import Header from "./Header"

class CreateQuiz extends Component {
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
                <p className="Questions">Please enter question here:</p>
              </Paper>
              <div>
                <div className="choices">
                  <p>A</p>
                  <Button variant="contained" className="">
                    <p>Enter multiple choice answer 1</p>
                  </Button>
                  <p>B</p>
                  <Button variant="contained" className="">
                    <p>Enter multiple choice answer 2</p>
                  </Button>
                </div>
                <div className="choices">
                  <p>C</p>
                  <Button variant="contained" className="">
                    <p>Enter multiple choice answer 3</p>
                  </Button>
                  <p>D</p>
                  <Button variant="contained" className="">
                    <p>Enter multiple choice answer 4</p>
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

export default CreateQuiz
