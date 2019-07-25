import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loggedIn, getRole } from '../Auth';

const LeadMentor = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn() && getRole() === 'leadmentor' ? (
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

export default LeadMentor;
