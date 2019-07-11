import React, { Component } from "react";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Navbar fluid collapseOnSelect>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/Home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes />
      </div>
    );
  }
}

export default App;
