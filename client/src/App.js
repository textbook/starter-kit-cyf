import React, { Component } from "react";

import { HashRouter } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Routes from "./Routes";
import Layout from "./Component/Layout";
// import Jumbotron from "./Component/Jumbotron";

// import { getMessage } from "./service";
import "./App.css";

class App extends Component {
  state = {
    isLogged: false,
  }

  render() {
    return (
      <main>
        <Header />
        {/* <Jumbotron /> */}
        <Layout>
          <HashRouter>
            <Routes />
          </HashRouter>
        </Layout>
        <Footer />
      </main>
    );
  }
}
export default App;
