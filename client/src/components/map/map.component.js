import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";
import { iconCyf } from './icon';
import markers from "./data/coord.json";
import DrawlineReg from "./drawLineReg";


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
                     markerPosition: [ {
                       Country: "Zambia",
                       Organisation: "Catholic Commission for Development (CCD)",
                       Address: "6 BRT. Plot 60, Kabulonga Road",
                       City: "Lusakat",
                       lat: -15.4256096,
                       lng: 28.2787495
                     }
                    ]
                   };
                 }

  addOneMarker = () => {
    console.log("add one marker");
    return <Marker key={`${this.state.markerPosition[0].City}`} position={[this.state.markerPosition[0].lat, this.state.markerPosition[0].lng]} icon={iconCyf} >
      <Popup>{this.state.markerPosition[0].Organisation}</Popup>
        </Marker>
      }
    
  
  addNationalMarkers = () => {
    console.log("add national level");
   
    const allTheRest = markers.map(
      (marker) => {
        return <Marker key={`${marker.City}`} position={[marker.lat, marker.lng]} icon={iconCyf} >
          <Popup>{marker.Organisation}</Popup>
        </Marker>
      }
    );
    return allTheRest;
};
                 render() {
                 
                   const visual = [this.state.lat, this.state.lng];
                   return (
                     <div>
                       <Map
                         className="map"
                         center={visual}
                         zoom={this.state.zoom}
                         style={{ height: "500px" }}
                       >
                         <TileLayer
                           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                         />
                         <DrawlineReg />
                         {this.addOneMarker()}
                         
                       </Map>
                       <button
                         className="btn btn-primary pt-10" onClick={this.addNationalMarkers}

                       >
                         Show national level
                       </button>
                      
                       <button
                         className="btn btn-primary pt-10"

                       >
                         Show regional level
                       </button>
                     </div>
                   );
                 }
                }