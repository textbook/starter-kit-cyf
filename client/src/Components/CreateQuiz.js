import { Button, Paper, TextField, Typography } from "@material-ui/core"
import axios from "axios"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import swal from "sweetalert"
import Header from "./Header"

class CreateQuiz extends Component {
  state = {
    title: "",
    questions: [],
    count: -1
  }

  componentDidMount() {
    this.addQuestion()
  }
  addQuestion = () => {
    this.setState(pre => {
      pre.questions.push({
        question: "",
        answers: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
        index_correct: ""
      })
      pre.count++
    })
  }

  handleClick = () => {
    axios.post("/api/quiz", this.state).then(res => console.log(res))
    return swal({
      title: "Good job!",
      text: "Quiz has been created.",
      icon: "success"
    })
  }

  updateAnswer = (e, i) => {
    const newText = e.target.value
    let questions = this.state.questions
    questions[0].answers[i] = { name: newText }
    this.setState({ questions })
  }

  updateTitle = e => {
    this.setState({ title: e.target.value })
  }

  correctIndex = e => {
    let questions = this.state.questions
    questions[0].index_correct = "ABCD".indexOf(e.target.value.trim())
    this.setState({ questions })
  }

  questionText = e => {
    let questions = this.state.questions
    questions[0].question = e.target.value
    this.setState({ questions })
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
            onChange={this.updateTitle}
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
                    onChange={e => this.updateAnswer(e, 0)}
                  />
                  <p>B</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    onChange={e => this.updateAnswer(e, 1)}
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
                    onChange={e => this.updateAnswer(e, 2)}
                  />
                  <p>D</p>
                  <TextField
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    color="primary"
                    onChange={e => this.updateAnswer(e, 3)}
                  />
                </div>

                <div className="Enter">
                  <TextField
                    name="ali"
                    id="outlined-dense"
                    label="Correct Answer"
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    onChange={this.correctIndex}
                  />
                </div>
              </div>
            </Typography>
          </Paper>
        </div>
        <div className="Add-cancel-plus">
          <div className="Add-cancel">
            <div className="Add">
              <Button
                variant="outlined"
                color="default"
                onClick={this.addQuestion}
              >
                Add Question
              </Button>
            </div>
            <div className="Add">
              <Button
                variant="outlined"
                color="default"
                onClick={this.handleClick}
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
