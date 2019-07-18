import React, { Component } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import SignUp from "./Component/Register/Signup";
import ThankYou from "./Component/Register/ThankYou";
import Login from "./Component/Register/Login";
import StudentRegister from "./Component/Student/StudentRegister";
import MentorHome from "./Component/Mentor/MentorHome";
import AdminHome from "./Component/Admin/AdminHome";
import Layout from "./Component/Layout";
import Jumbotron from "./Component/Jumbotron";

// import { getMessage } from "./service";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Jumbotron />
        <Layout>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/signUp" exact component={SignUp} />
              <Route path="/thankYou" exact component={ThankYou} />
              <Route path="/studentRegistered" component={StudentRegister} />
              <Route path="/mentorHome" exact component={MentorHome} />
              <Route path="/adminHome" exact component={AdminHome} />
            </Switch>
            <Footer />
          </HashRouter>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
