import React from "react"
import { Redirect, Route } from "react-router-dom"
import { loggedIn } from "../Auth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn() ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
