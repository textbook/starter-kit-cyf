
import { Button, TextField } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import Header from "./Header"

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
              onChange={this.props.handleChange}
              value={this.props.pin}
            />
          </div>
          <div className="Game_Enter">

            <Button
              variant="contained"
              color="secondary"
              onClick={this.props.handleClick}
            >
              Enter
            </Button>

          </div>
        </div>
        <div className="Add-Enter">
          <Link className="" to="/">
            Cancel and Return

          </Link>
        </div>
        <div className="Background-design-two" />
        <div className="Background-design-three" />
      </div>
    )
  }
}


export default withRouter(EnterPin)

