<<<<<<< HEAD
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { loggedIn } from "../Auth/index"
import image from "../Image.png"
import Header from "./Header"
import Login from "./Login"
=======

import { Button } from "@material-ui/core"
import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import image from "../Image.png"
import Header from "./Header"
import Menu from "./Menu"
import Animate from './Animation'

>>>>>>> origin

class Home extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          <div className="Background-design " />
<<<<<<< HEAD
          {!loggedIn() && <Login {...this.props} />}

=======

<Menu />

          
>>>>>>> origin
          <div className="image-container">
            {/* <img src={image} className="image" alt="image" /> */}
<Animate />
          </div>
          <div className="Background-design-two" />
          <div className="Background-design-three" />
          <div className="Background-design-four" />

<<<<<<< HEAD
=======

>>>>>>> origin
          <div className="codEmpire">©CodeEmpire July 2019</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
<<<<<<< HEAD
=======

>>>>>>> origin
