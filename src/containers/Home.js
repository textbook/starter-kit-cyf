import React, { Component } from "react";
import "./Home.css";
import Search from './Search'
 class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                   <h1>CYF@Glossary</h1>
                    <Search />
                </div>
            </div>
        );
    }
}
export default Home;