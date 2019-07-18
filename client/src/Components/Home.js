import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import image from '../image.png';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <div className="Background-design " />
          <div className="Create-play-result">
            <div className="Create">
              <Button variant="contained" color="default">
                Create Quiz
              </Button>
            </div>
            <div className="Play">
              <Button variant="contained" color="default">
                Play
              </Button>
            </div>
            <div className="Result">
              <Button variant="contained" color="default">
                Results
              </Button>
            </div>
          </div>
          <div className="image-container">
            <img src={image} className="image" alt="image" />
          </div>
          <div className="Background-design-two" />
          <div className="Background-design-three" />
          <div className="codEmpire">©CodEmpire July 2019</div>
        </div>
      </div>
    );
  }
}

export default Home;
