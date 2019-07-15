import React from "react"
import { Link } from "react-router-dom"
import logo_CYF_square from '../images/logo-CYF-square.png'
import { Pane } from 'evergreen-ui'; 

export default () => (

      <Pane 
       borderBottom 
       width="100%" 
       height={60}
       display="flex"
        justifyContent="space-around"
        alignItems="center" >
            <img src={logo_CYF_square} alt="logo" width="80" height="50" />

        <Link
          to={`/`}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
          
          <h2>
            Welcome to CYF Feedback </h2>
        </Link>
        </Pane>
)
