import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";
import DrawlineReg from "./drawLineReg";
import DrawlineGlo from "./drawLineGlo";
import NationalMarker from "./nationalMarker";

Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

export default class MapIt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 25.257017,
      lng: 30.077524,
      zoom: 2,
      mapType: "national"
    }
    };

  changeMapType = (type) => {
    this.setState({mapType : type})
  };

  render() {
// national regional global
    return (
      <div>
        {this.state.mapType == "national" && <NationalMarker /> }
        {this.state.mapType == "regional" && <DrawlineReg /> }
        {this.state.mapType == "global" && <DrawlineGlo />}

         
         
        <button
          className="btn btn-primary pt-10" 
          onClick={() => this.changeMapType("national")}
        >
          Show national level
                       </button>

        <button
          className="btn btn-primary pt-10" 

          onClick={() => this.changeMapType("regional")}
        >
          Show regional level
                       </button>
        <button
          className="btn btn-primary pt-10" 

          onClick={() => this.changeMapType("global")}
        >
          Show global level
                       </button>
      </div>
    );
  }
}