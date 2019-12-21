import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";

Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



export default class MapIt extends Component {
  state = {
    lat: 25.257017,
    lng: 30.077524,
    zoom: 2,
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    const markerPosition = [41.90121, 12.50379]
    return (
      <Map className="map" center={position} zoom={this.state.zoom} style={{ height: '500px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
          <Popup>
            The Extraordinary Ones
           
        </Popup>
        </Marker>
      </Map>
    )
  }
}