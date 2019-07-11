import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home';
import CreateQuiz from './Components/CreateQuiz';
import EnterPin from './Components/EnterPin';
import TakeQuiz from './Components/TakeQuiz';
import Results from './Components/Results';

import './App.css';
import './Grid.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/CreateQuiz" component={CreateQuiz} />
        <Route path="/EnterPin" component={EnterPin} />
        <Route path="/TakeQuiz" component={TakeQuiz} />
        <Route path="/Results" component={Results} />
      </BrowserRouter>
    );
  }
}
export default App;
