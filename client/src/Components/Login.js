import axios from "axios"
import React, { Component } from "react"
import swal from "sweetalert"
import { getRole, setToken } from "../Auth/index"

class Login extends Component {
  state = {
    email: "",
    password: ""
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = async e => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      const response = await axios.post("/api/login", {
        email,
        password
      })
      if (response.status === 200) {
        await setToken(response.data)
        const role = getRole()
        if (role === "student") {
          return this.props.history.replace("/play")
        }
        if (role === "mentor") {
          return this.props.history.replace("/results")
        }
        if (role === "leadmentor") {
          return this.props.history.replace("/createquiz")
        }
        return
      } else {
        throw new Error("no token")
      }
    } catch (err) {
      if (err.response) {
        return swal("Cancelled", err.response.data.msg, "error")
      }
      return swal(
        "Cancelled",
        "Somethings went wrong, please try again later.",
        "error"
      )
    }
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="container-fluid d-flex flex-column align-items-start justify-content-center mt ml">
        <form onSubmit={this.handleLogin} className="row">
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={email}
              className="form-control login-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group  ml-1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              className="form-control login-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-success ml-1">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
