import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React, { Component } from "react"
import Header from "./Header"

class CreateQuiz extends Component {
  state = {
    questions: {
      1: [""]
    },
    answers: {
      1: [""]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Background-design" />

        <div className="Quiz-title">
          <TextField
            id="outlined-dense"
            label="Quiz Title"
            margin="dense"
            variant="outlined"
          />
        </div>
        <div className="Paper-two">
          <Paper>
            <Typography variant="h6" component="h6">
              <div>
                <p className="Quiz-title">Question 1:</p>
                <Paper className="Paper-two">
                  <p className="Questions">Please enter question here:</p>
                </Paper>
              </div>
              <div>
                <div className="choices">
                  <p>A</p>
                  <Button variant="contained" color="secondary">
                    <p>Answer 1</p>
                  </Button>
                  <p>B</p>
                  <Button variant="contained" color="secondary">
                    <p>Answer 2</p>
                  </Button>
                </div>
                <div className="choices">
                  <p>C</p>
                  <Button variant="contained" color="secondary">
                    <p>Answer 3</p>
                  </Button>
                  <p>D</p>
                  <Button variant="contained" color="secondary">
                    <p>Answer 4</p>
                  </Button>
                </div>

                <div className="Enter">
                  <TextField
                    id="outlined-dense"
                    label="Correct Answer"
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                  />
                </div>
              </div>
            </Typography>
          </Paper>
        </div>

        <div className="Add-cancel">
          <div className="Add">
            <Button variant="outlined" color="primary">
              Add Question
            </Button>
          </div>
          <div className="Add">
            <Button variant="outlined" color="primary">
              Create Quiz
            </Button>
          </div>
          <div className="Add">
            <Button variant="outlined" color="primary">
              Cancel and Return
            </Button>
          </div>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    )
  }
}

export default CreateQuiz
