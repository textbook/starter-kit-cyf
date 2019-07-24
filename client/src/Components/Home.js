
import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import image from "../Image.png"
import Header from "./Header"
import Menu from "./Menu"
import Login from './Login'
import { loggedIn } from '../Auth/index'

class Home extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          <div className="Background-design " />
          {loggedIn() ? <Menu /> : <Login /> }



          
          <div className="image-container">
            <img src={image} className="image" alt="image" />
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

