import { Button, Paper, Typography } from "@material-ui/core"
import React, { Component, Fragment } from "react"

export default class Question extends Component {
  render() {
    const { id, question, answers } = this.props.question
const alphabet = "ABCDEFGH"
    return (
      <Paper className="Paper-one">
        <Typography variant="h6" component="h6">
                <p className="Questions">Question {this.props.count}/{this.props.length}</p>
          <Paper className="Paper-two">
            <p className="Questions">{question}</p>
          </Paper>

          <div className="choices">
            {answers.map((answer, i) => {
              return (
                <Fragment key={i} >
                  <p>{alphabet.charAt(i)}</p>
                  <Button variant="contained" color="primary" onClick={() => this.props.answer(i, this.props.count - 1)}>
                    {answer.name}
                  </Button>
                </Fragment>
              )
            })}
          </div>
        </Typography>
      </Paper>
    )
  }
}
