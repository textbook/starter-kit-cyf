import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

import image from '../Image.png';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          <div className="Background-design " />
          <div className="Create-play-result">
            <div className="Create">
              <Link to="/CreateQuiz">
                <Button variant="contained" color="default">
                  Create Quiz
                </Button>
              </Link>
            </div>
            <div className="Play">
              <Link className="Menu" to="/EnterPin">
                <Button variant="contained" color="default">
                  Play
                </Button>
              </Link>
            </div>
            <div className="Result">
              <Link className="Menu" to="/Results">
                <Button variant="contained" color="default" >
                  Results
                </Button>
              </Link>
            </div>
          </div>
          <div className="image-container">
            <img src={image} className="image" alt="image" />
          </div>
          <div className="Background-design-two" />
          <div className="Background-design-three" />
          <div className="Background-design-four" />
          
          <div className="codEmpire">©CodeEmpire July 2019</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
