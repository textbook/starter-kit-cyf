import React, { Component } from 'react'


class Map extends Component{
    render(){
        return (
          <div>
            <h1
              style={{
                backgroundColor: "blue",
                height: 100,
                boxSizing: "border-box",
                weight: 100
              }}
            >
              map component
            </h1>
            <h1
              style={{
                backgroundColor: "brown",
                height: 100,
                boxSizing: "border-box",
                weight: 100
              }}
            >
              Images component
            </h1>
          </div>
        );
    }
}

export default Map