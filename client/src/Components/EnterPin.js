import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
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
            <Button variant="contained" color="secondary">
              Enter
            </Button>
          </div>
        </div>
        <div className="Background-design-two" />
        {/* <div className="Background-design-three" /> */}
      </div>
    );
  }
}

export default EnterPin;
