import React, { Component } from "react";
import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { iconCyf } from "./icon";
import marker from "./data/CaritasInt_point.json";


export default class GlobalMarker extends Component {
    addGlobalMarker = () => {
        console.log("add global level marker");
        return <Marker key={"RomeInt"} position={[41.889138, 12.469635]} icon={iconCyf}></Marker>
            }

    render() {
        return (
            <div>
                {this.addGlobalMarker()}
            </div>
        );
    }
}