import { Button, Paper, Typography } from "@material-ui/core"
import React, { Component, Fragment } from "react"
import { getCorrectQuestion } from "./Helper"

export default class Question extends Component {
  render() {
    const { id, question, answers, correctAnswer } = this.props.question
    const { pin } = this.props
    return (
      <Paper className="Paper-one">
        <Typography variant="h6" component="h6">
          <p className="Questions">
            Question {this.props.count}/{this.props.length}
          </p>
          <Paper className="Paper-two">
            <p className="Questions">{question}</p>
          </Paper>

          <div className="choices">
            {answers.map((answer, i) => {
              return (
                <Fragment key={i}>
                  <p>{answer.name}</p>
                  <Button
                    variant="contained"
                    color={
                      getCorrectQuestion(pin, id) === answer.name
                        ? "default"
                        : "primary"
                    }
                    onClick={() => {
                      this.props.answer(answer.name, id, correctAnswer)
                    }}
                  >
                    {answer.answer}
                  </Button>
                  &nbsp;&nbsp;
                </Fragment>
              )
            })}
          </div>
        </Typography>
      </Paper>
    )
  }
}
