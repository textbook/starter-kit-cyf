import React, { Component } from 'react'
import logo from '../logo.png';



class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3 className="Title">Assesment Quiz App</h3>
                </header>
            </div>
        )
    }
}

export default Home;