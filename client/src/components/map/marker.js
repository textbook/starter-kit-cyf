import React, { Component } from "react";
import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { iconCyf } from "./icon";
import markers from "./data/coord.json";


Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

export default class MarkIt extends Component {
addNationalMarkers = () => {
    console.log("add national level");
    return markers.map(
      (marker) => {
        return <Marker key={`${marker.City}`} position={[marker.latitude, marker.longitude]} icon={iconCyf}></Marker>
      }
    )
  }
    
  render() {
  
    return <div>{this.addNationalMarkers()}</div>;
  }
}