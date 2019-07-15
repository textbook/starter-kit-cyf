import React, { Component, Fragment } from "react";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Search from "./containers/Search";
import SingleTerm from './containers/SingleTerm';
import AddNewTerm from "./containers/AddNewTerm";

class App extends Component {


    render(){
      return (
        <Fragment>
        <Router>
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/Signup" exact component={Signup} />
    <Route path="/Search" exact component={Search} />
    <Route path="/:topic/:term" component={SingleTerm}/>
    <Route path="/new" component={AddNewTerm} />
    { /* Finally, catch all unmatched routes */}
    <Route component={NotFound} />

            </Switch>
        </Router>
        </Fragment>
      );

    }

    }

    export default App
