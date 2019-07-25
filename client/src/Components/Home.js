import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { loggedIn } from "../Auth/index"
import Header from "./Header"
import Login from "./Login"

class Home extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          <div className="Background-design " />
          {!loggedIn() && <Login {...this.props} />}

          <div className="image-container">
            {/* <img src={image} className="image" alt="image" /> */}
          </div>
          <div className="Background-design-two" />
          <div className="Background-design-three" />
          <div className="Background-design-four" />

          <div className="codEmpire">©CodeEmpire July 2019</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
