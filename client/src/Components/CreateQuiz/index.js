import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import swal from "sweetalert"
import Header from "../Header"
import CreateQuestion from "./CreateQuestion"

const newQuestion = {
  question: "",
  answers: [
    {
      name: "A",
      answer: ""
    },
    {
      name: "B",
      answer: ""
    },
    {
      name: "C",
      answer: ""
    },
    {
      name: "D",
      answer: ""
    }
  ],
  correctAnswer: ""
}

class CreateQuiz extends Component {
  state = {
    pin: 0,
    title: "",
    questions: [
      {
        id: 0,
        ...newQuestion
      }
    ]
  }

  UNSAFE_componentWillMount() {
    axios.get("/api/get-pin").then(res => {
      if (res) {
        const pin = res.data.pin
        this.setState({ pin })
      }
    })
  }

  addQuestion = () => {
    const { questions } = this.state

    this.setState({
      questions: [...questions, { ...newQuestion, id: questions.length }]
    })
  }

  handleClick = () => {
    axios.post("/api/quiz", this.state).then(res => {
      return swal({
        title: `Quiz pin: ${this.state.pin}`,
        text: "Quiz has been created.",
        icon: "success"
      })
    })
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    const questionId = name.split("-")[0]
    const Name = name.split("-")[1]
    const { questions, title } = this.state
    const newQuestions = questions.map(question => {
      if (question.id === parseInt(questionId)) {
        const newAnswers = question.answers.map(answer => {
          if (Name === answer.name) {
            return {
              name: answer.name,
              answer: value
            }
          }
          return answer
        })
        return {
          question: Name === "question" ? value : question.question,
          answers: newAnswers,
          correctAnswer:
            Name === "correctAnswer" ? value : question.correctAnswer,
          id: question.id
        }
      }
      return question
    })
    this.setState({
      questions: newQuestions,
      title: name === "title" ? value : title
    })
  }

  render() {
    const { title, questions, pin } = this.state
    return (
      <div className="App">
        <Header title="Create Quiz" />
        <div className="Quiz-title">
          <TextField
            id="outlined-dense"
            label="Quiz Title"
            margin="dense"
            variant="outlined"
            color="secondary"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
        </div>
        {questions.map((question, index) => {
          return (
            <CreateQuestion
              index={index}
              title={title}
              {...question}
              handleChange={this.handleChange}
              addQuestion={this.addQuestion}
            />
          )
        })}
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
          </div>
        </div>
        <div className="Add">
          <Link className="" to="/results">
            <Button variant="outlined" color="default">
              Results
            </Button>
          </Link>
        </div>
        <div className="Add">
          <Button variant="outlined" color="default" onClick={this.handleClick}>
            Create Quiz
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateQuiz)
