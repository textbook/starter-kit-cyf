import React, { Component } from "react"
import EnterPin from "./EnterPin"
import TakeQuiz from "./TakeQuiz"
import axios from 'axios'

export default class Play extends Component {
  state = {
    pin: "",
    quiz: null,
      error: ""
    
  }

  handleChange = e => this.setState({ pin: e.target.value })
  handleClick = async e => {
    e.prevent
    const data = await axios.get(
      `http://localhost:3100/api/quiz/${this.state.pin}`
    )
    if (data.data.length > 0) {
     return this.setState({ quiz: data.data[0] })
    } else {
     return this.setState({ error: "no result" })
    }
  }

  render() {
      const { quiz } = this.state
    return (
      <div>
        {!quiz ? (
          <EnterPin
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        ) : (
          <TakeQuiz quiz={this.state.quiz} />
        )}
      </div>
    )
  }
}
