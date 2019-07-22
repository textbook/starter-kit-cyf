import { Button, Paper, Typography, TextField } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';

class CreateQuiz extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
              <Button variant="outlined" color="default">
                Create Quiz
              </Button>
            </div>
            <div className="Add">
              <Link className="" to="/">
                <Button variant="outlined" color="default">
                  Cancel and Return
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    );
  }
}

export default withRouter(CreateQuiz);
