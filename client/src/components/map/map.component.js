import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";
import { iconCyf } from './icon';


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
    position:
      [41.90121, 12.50379]
     
}
    this.onClick = this.addNationalMarkers.bind(this);
}

  
  addNationalMarkers = () => {
    console.log("add national level");
    console.log(this.state.position);
    this.setState({
      position: [21.90121, 52.50379]
});
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
          <Marker position={this.state.position} icon={iconCyf}>
          <Popup>
            The Extraordinary Ones
        </Popup>
        </Marker>
      </Map>
        <button className="btn btn-primary" onClick={this.addNationalMarkers}>Show national level</button>
      </div>
    )
  }
}