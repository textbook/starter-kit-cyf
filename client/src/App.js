import React, { Fragment,component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import MainMentor from "./Components/MainMentor";
import FloatingMentor from "./Components/FloatingMentor";
import StudentPage from "./Components/StudentPage"

import Header from "./Components/Header";

import "./App.css";


export default () => (
  <Fragment>
    <BrowserRouter>
      <Fragment>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/mentor" component={MainMentor} />
        <Route exact path="/floatingMentor" component={FloatingMentor} />
        <Route exact path="/studentPage" component={StudentPage} />
      </Fragment>
    </BrowserRouter>
  </Fragment>
);

