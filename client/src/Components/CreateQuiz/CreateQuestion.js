import { Paper, TextField, Typography } from "@material-ui/core"
import React, { Fragment } from "react"

export default function CreateQuestion(props) {
  const { question, index } = props
  return (
    <Fragment key={index}>
      <div className="Background-design" />

      <div className="Paper-two">
        <Paper style={{ border: "1px dotted black" }}>
          <Typography variant="h6" component="h6">
            <div className="Questions">
              <p>Question {index + 1}</p>
              <TextField
                id="outlined-full-width"
                fullWidth
                margin="normal"
                variant="outlined"
                name={`${props.id}-${"question"}`}
                onChange={props.handleChange}
                value={props.question}
              />
            </div>
            <div>
              <div className="choices">
                {props.answers.map((answer, index) => {
                  return (
                    <Fragment key={index}>
                      <p>{answer.name}</p>
                      <TextField
                        id="outlined-bare"
                        margin="normal"
                        variant="outlined"
                        color="primary"
                        name={`${props.id}-${answer.name}`}
                        onChange={props.handleChange}
                        value={answer.answer}
                      />
                    </Fragment>
                  )
                })}
              </div>

              <div className="Enter">
                <TextField
                  name="ali"
                  id="outlined-dense"
                  label="Correct Answer"
                  margin="dense"
                  variant="outlined"
                  color="secondary"
                  name={`${props.id}-${"correctAnswer"}`}
                  onChange={props.handleChange}
                  value={props.currentAnswer}
                />
              </div>
            </div>
          </Typography>
        </Paper>
      </div>

      <div className="Background-design-two" />
      <div className="Background-design-three" />
    </Fragment>
  )
}
