import React, { Component } from "react";
import Leaflet from "leaflet";
import { Polyline } from "react-leaflet";
import lines from "./data/caritasIntlines.json";
import GlobalMarker from "./globalMarker";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css";



export default class DrawLineGlo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 25.257017,
            lng: 30.077524,
            zoom: 2,
            data: lines

        };
    }
    render() {
            const visual = [this.state.lat, this.state.lng];
        const from_lat = this.state.data.map(start => start.from_lat)
        const to_lat = this.state.data.map(to => to.to_lat)

        const from_long = this.state.data.map(start => start.from_long)
        const to_long = this.state.data.map(to => to.to_long)
        return (
            <div id="lines">
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
                {this.state.data.map(({ City, from_lat, from_long, to_lat, to_long }) => {
                    return <Polyline key={City} positions={[
                        [from_lat, from_long], [to_lat, to_long],
                    ]} color={'red'} weight={0.8} />
                })}
                <GlobalMarker />
                </Map>
            </div>
        );
    }
}