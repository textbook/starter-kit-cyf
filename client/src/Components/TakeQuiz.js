import { Button } from "@material-ui/core"
import axios from "axios"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import swal from "sweetalert"
import { getProfile } from "../Auth/index"
import Header from "./Header"
import { getLocalStorageArray, setAnswers } from "./Helper"
import Question from "./Question"

class TakeQuiz extends Component {
  state = {
    count: 0,
    answers: []
  }

  handNext = length => {
    const { count } = this.state
    if (count < length) {
      this.setState({
        count: count + 1
      })
    } else {
      const { email, id } = getProfile()
      const answers = {
        pin: this.props.pin,
        email,
        answers: this.state.answers,
        id
      }
      axios.put("/api/answer", answers).then(res => {
        if (res.status === 200) {
          localStorage.setItem(this.props.pin, "")
          if (res.data.point > 40) {
            return swal({
              title: `Your point: ${res.data.point}`,
              text: "Congratulations, you made it!!",
              icon: "success"
            }).then(() =>
              this.props.history.replace(`/result?${this.props.pin}`)
            )
          } else {
            return swal({
              title: `Your point: ${res.data.point}`,
              text: "Sorry, practice more and try again.",
              icon: "success"
            }).then(() => this.props.history.replace("/results"))
          }
        } else {
          return swal({
            title: `Please try again.`,
            text: "Sorry, something went wrong.",
            icon: "error"
          })
        }
      })
    }
  }

  UNSAFE_componentWillMount() {
    const answers = getLocalStorageArray(this.props.pin)
    if (answers) {
      this.setState({ answers })
    }
  }

  handPrevious = () => {
    const { count } = this.state
    count > 0 &&
      this.setState({
        count: count - 1
      })
  }

  handleAnswers = (answer, questionId, correctAnswer) => {
    this.setState({
      answers: setAnswers(this.props.pin, answer, questionId, correctAnswer)
    })
  }

  render() {
    return (
      <div className="App">
        <Header title="Answer Quiz" />

        <div className="Background-design" />
        <div className="Final-score">
          <span onClick={this.handPrevious} className="Previous">
            {" "}
            Previous
          </span>
          <div>
            {this.props.quiz.questions.map((question, i) => {
              if (i === this.state.count) {
                return (
                  <Question
                    key={i}
                    question={question}
                    count={this.state.count + 1}
                    length={this.props.quiz.questions.length}
                    answer={this.handleAnswers}
                    pin={this.props.pin}
                  />
                )
              }
            })}
          </div>
          <span
            onClick={() => this.handNext(this.props.quiz.questions.length - 1)}
            className="Next"
          >
            {" "}
            {this.state.count === this.props.quiz.questions.length - 1
              ? "Submit"
              : "Next"}
            {/* &raquo; */}
          </span>
        </div>
        <div className="Add-Enter">
          <Link className="" to="/results">
            <Button variant="outlined" color="default">
              Cancel and check results
            </Button>
          </Link>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    )
  }
}

export default withRouter(TakeQuiz)
