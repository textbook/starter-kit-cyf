import React, { Component } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.png';
import Header from './Header';

class EnterPin extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Background-design" />
        <div className="Game">
          <div className="Game_Enter">
            <TextField
              label="USERNAME"
              variant="outlined"
              id="custom-css-outlined-input"
              color="secondary"
            />
          </div>
          <div className="Game_Enter">
            <TextField
              className="User_Game"
              label="GAME PIN"
              variant="outlined"
              id="custom-css-outlined-input"
              color="secondary"
            />
            <inputComponent />
          </div>
          <div className="Game_Enter">
            <Link className="" to="/TakeQuiz">
              <Button variant="contained" color="secondary">
                Enter
              </Button>
            </Link>
          </div>
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
    );
  }
}

export default withRouter(EnterPin);
