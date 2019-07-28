import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import Header from "./Header"
import axios from "axios";

class CreateQuiz extends Component {
  state = {
    title: "",
    questions: [
      {
        question: "",
        answers: [
          {
            name: ""
          }
        ],
        index_correct: null
      }
    ]
  }

  handleClick = () => {
    axios.post("/api/quiz", this.state).then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">

        <Header title="Create Quiz" />

        <div className="Background-design" />

        <div className="Quiz-title">
          <TextField
            id="outlined-dense"
            label="Quiz Title"
            margin="dense"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div className="Paper-two">
          <Paper>
            <Typography variant="h6" component="h6">
              <div className="Questions">
                <p>Question 1:</p>
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div>
                <div className="choices">
                  <p>A</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <p>B</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div className="choices">
                  <p>C</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
                  <p>D</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    color="primary"
                  />
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
        <div className="Add-cancel-plus">
          <div className="Add-cancel">
            <div className="Add">
              <Button variant="outlined" color="default">
                Add Question
              </Button>
            </div>
            <div className="Add">
              <Button
                variant="outlined"
                color="default"
                onClick={() => this.handleClick}
              >
                Create Quiz
              </Button>
            </div>
            <div className="Add">
              <Link className="" to="/results">
                <Button variant="outlined" color="default">
                  Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    )
  }
}

export default withRouter(CreateQuiz)
