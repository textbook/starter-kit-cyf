
import { Button } from "@material-ui/core"

import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import Header from "./Header"
import Question from "./Question"
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
                  count={this.state.count+1}
                  length={this.props.quiz.questions.length}
                />
              )
            }
          })}

          <span
            onClick={() => this.handNext(this.props.quiz.questions.length - 1)}
            className="Next"
          >
            {" "}
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


export default withRouter(TakeQuiz)

