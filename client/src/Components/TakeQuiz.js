<<<<<<< HEAD
import { Button } from "@material-ui/core"
=======

import { Button } from "@material-ui/core"

>>>>>>> origin
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import Header from "./Header"
import Question from "./Question"
<<<<<<< HEAD

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
      console.log(this.state.answers)
      // axios.post()
    }
  }
  handPrevious = () => {
    const { count } = this.state
    count > 0 &&
      this.setState({
        count: count - 1
      })
  }

  handleAnswers = (answer, question) => {
    console.log(this.state.answers)
    this.setState(pre => {
      answers: pre.answers.push([answer, question])
=======
class TakeQuiz extends Component {
  state = {
    count: 0
  }

  handNext = (length) => {
    const { count } = this.state
    count < length && this.setState({
      count: count + 1
    })
  }
  handPrevious = () => {
    const { count } = this.state
    count > 0 && this.setState({
      count: count - 1
>>>>>>> origin
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Background-design" />
        <div className="Final-score">
          <span onClick={this.handPrevious} className="Previous">
            {" "}
            Previous
          </span>

          {this.props.quiz.questions.map((question, i) => {
            if (i === this.state.count) {
              return (
                <Question
                  key={i}
                  question={question}
<<<<<<< HEAD
                  count={this.state.count + 1}
                  length={this.props.quiz.questions.length}
                  answer={this.handleAnswers}
=======
                  count={this.state.count+1}
                  length={this.props.quiz.questions.length}
>>>>>>> origin
                />
              )
            }
          })}

          <span
            onClick={() => this.handNext(this.props.quiz.questions.length - 1)}
            className="Next"
          >
            {" "}
<<<<<<< HEAD
            {this.state.count === this.props.quiz.questions.length - 1
              ? "Submit"
              : "Next"}
            {/* &raquo; */}
          </span>
=======
            Next
            {/* &raquo; */}
          </span>
        </div>
        <div className="Add-Enter">
          <Link className="" to="/">
            <Button variant="outlined" color="default">
              Cancel and Return
            </Button>
          </Link>
>>>>>>> origin
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

<<<<<<< HEAD
export default withRouter(TakeQuiz)
=======

export default withRouter(TakeQuiz)

>>>>>>> origin
