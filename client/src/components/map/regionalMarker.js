import React, { Component } from "react";
import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { iconCyf } from "./icon";
import markers from "./data/Caritas_regionalOffices.json";


export default class RegionalMarker extends Component {
    addRegionalMarkers = () => {
        console.log("add regional level markers");
        return markers.map(
            (marker) => {
                return <Marker key={`${marker.City}`} position={[marker.lat, marker.lng]} icon={iconCyf}></Marker>
            }
        )
    }

    render() {
        return (
            <div>
                {this.addRegionalMarkers()}
            </div>
        );
    }
}




