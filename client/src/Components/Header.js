import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo.png"

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">Home</Link>
      <Link to="/CreateQuiz">Create Quiz</Link>
      <Link to="/EnterPin">Enter Pin</Link>
      <Link to="/Results">Results</Link>
      <Link to="/TakeQuiz">Take Quiz</Link>
      <h3 className="Title">Assessment Quiz App</h3>
    </header>
  )
}
