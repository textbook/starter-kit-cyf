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
            
        };
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


                    {this.addNationalMarkers()}

                </Map>
            </div>
        );
    }
}




maxZoom={20}
                         attributionControl={true}
                         zoomControl={true}
                         doubleClickZoom={true}
                         scrollWheelZoom={true}
                         dragging={true}
                         animate={true}
                         easeLinearity={0.35}
                         onclick={this.handleClick}