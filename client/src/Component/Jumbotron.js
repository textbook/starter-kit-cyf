import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import './jumbotron.css';

export class Jumbotron extends Component {
  render() {
    return (
      <Jumbo className="jumbo">

        <Container>
          <h2><span className="nameBrand">REGI</span>SWIFT</h2>
        </Container>

      </Jumbo >


    );
  }
}

export default Jumbotron;

