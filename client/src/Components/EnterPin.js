import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import logo from '../logo.png';
import Header from './Header';

class EnterPin extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
