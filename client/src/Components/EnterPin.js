import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import logo from '../logo.png';
import { blue } from '@material-ui/core/colors';
class EnterPin extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header-two">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Game">
          <div className="Game_Enter">
            <TextField
              label="USERNAME"
              variant="outlined"
              id="custom-css-outlined-input"
            />
          </div>
          <div className="Game_Enter">
            <TextField
              className="User_Game"
              label="GAME PIN"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            <inputComponent />
          </div>
          <div className="Game_Enter">
            <Button variant="contained" color="primary">
              Enter
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EnterPin;
