
import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import image from "../Image.png"
import Header from "./Header"
import Menu from "./Menu"
import Animate from './Animation'


class Home extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          <div className="Background-design " />

<Menu />

          
          <div className="image-container">
            {/* <img src={image} className="image" alt="image" /> */}
<Animate />
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

