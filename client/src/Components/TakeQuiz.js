import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import Header from "./Header"
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
                  count={this.state.count + 1}
                  length={this.props.quiz.questions.length}
                  answer={this.handleAnswers}
                />
              )
            }
          })}

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
