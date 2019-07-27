import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getRole, loggedIn } from '../Auth/index';
import image from '../Image.png';
import Header from './Header';
import Login from './Login';

class Home extends Component {
  UNSAFE_componentWillMount() {
    const role = getRole();
    if (role === 'student') {
      return this.props.history.replace('/play');
    }
    if (role === 'mentor') {
      return this.props.history.replace('/results');
    }
    if (role === 'leadmentor') {
      return this.props.history.replace('/createquiz');
    }
  }

  render() {
    return (
      <div className="App ">
        <Header title="Quiz App"/>
        <div>
          <div className="Background-design " />

          
             {!loggedIn() && <Login {...this.props} />}
          
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
