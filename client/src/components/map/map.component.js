import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";
import { iconCyf } from './icon';
import markers from "./data/coord.json";


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
    position: [markers.latitude, markers.longitude]
}
    
}

  /*
  addNationalMarkers = () => {
    console.log("add national level");
    return markers.map(
      (marker) => {
        return <Marker key={`${marker.City}`} position={[marker.latitude, marker.longitude]} icon={iconCyf}></Marker>
      }
    )
  }
  this.onClick = this.addNationalMarkers.bind(this);
*/
  renderMarkers = (marker) => {
    console.log("I am here");
    //console.log(markers)
    markers.filter(marker => {
      return marker.City === "Roma"
    });
    return <Marker key={`${marker.City}`} position={[marker.latitude, marker.longitude]} icon={iconCyf}></Marker>
  }
    
  render() {
  
    const visual = [this.state.lat, this.state.lng]
    return (
      <div>
      <Map className="map" center={visual} zoom={this.state.zoom} style={{ height: '500px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {this.renderMarkers()}
      </Map>
        <button className="btn btn-primary" onClick={this.addNationalMarkers}>Show national level</button>
      </div>
    )
  }
}