import React, { Component } from "react";
import "./Home.css";
import Search from './Search';



export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="Home">
                <div className="lander">
                   <h1>CYF@Glossary</h1>
                    <Search />

                </div>
                </div>
            </div>
        );
    }
}
