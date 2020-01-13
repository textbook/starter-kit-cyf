import React, { Component } from 'react';
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import { iconCyf } from "./icon";

export default class PickCoordMap extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     currentPos: null
                   };
                   this.handleClick = this.handleClick.bind(this);
                 }

                 handleClick(e) {
                     
                   this.setState({ currentPos: e.latlng });
                   console.log(this.state.currentPos);
                 }

                 render() {
                   return (
                     <div className= "jumbotron">
                     <h1 className="heading">Where are you now? Pick your location</h1>
                       <Map
                       className="map"
                         center={[35.755229, 51.30447]}
                         zoom={2}
                         style={{ height: "500px" }}
                         maxZoom={20}
                         attributionControl={true}
                         zoomControl={true}
                         doubleClickZoom={true}
                         scrollWheelZoom={true}
                         dragging={true}
                         animate={true}
                         easeLinearity={0.35}
                         onClick={this.handleClick}
                       >
                         >
                         <TileLayer
                           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                         />
                         {this.state.currentPos && (
                           <Marker
                             position={this.state.currentPos}
                             draggable={true}
                             icon={iconCyf}
                           >
                             <Popup position={this.state.currentPos}>
                               Your current location is :{" "}
                               <pre>
                                 {JSON.stringify(
                                   this.state.currentPos,
                                   null,
                                   2
                                 )}
                               </pre>
                             </Popup>
                           </Marker>
                         )}
                       </Map>
                     </div>
                   );
                 }
               }
