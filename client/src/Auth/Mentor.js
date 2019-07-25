import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loggedIn, getRole } from '../Auth';

const Mentor = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn() && getRole() === 'mentor' ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default Mentor;
