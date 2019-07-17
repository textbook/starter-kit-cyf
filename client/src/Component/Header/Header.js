import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .navbar-brand {
    margin: 0;
    padding: 0;
  }
  .logo {
    height: 50px;
    padding-left: 5px;
    padding-right: 15px;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #414141;
    &:hoover {
      color: black;
    }
  }
`;

function Header() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <img
            className="img-responsive logo"
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <Nav.Link href="/#">Login</Nav.Link>
       </NavItem>
            <NavItem> 
              <Nav.Link href="/#/signUp" >signUp</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
export default Header;
