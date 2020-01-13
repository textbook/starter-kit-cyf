import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

//Components

import NavBar from "./components/nav/nav.component";
import HomePage from "./components/HomePage/homepage.component";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Ourwork from "./components/pages/Ourwork";

class App extends Component {
  

  render() {
    //  console.log to see the data coming from the database.
   
    return (
      <>
        <Route exact path="/" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/ourwork" component={Ourwork} />
        <Route path="/about" component={About} />

        <NavBar />
        <HomePage />
        
      </>
    );
  }}



export default App;
