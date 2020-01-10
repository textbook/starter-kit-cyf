import React, { Component } from "react";
import Leaflet from "leaflet";
import { Polyline } from "react-leaflet";
import lines from "./data/allRegLines.json";
import RegionalMarker from "./regionalMarker";

export default class DrawLineReg extends Component {
   
    state = {
        data: lines
    };
    render() {

        const from_lat = this.state.data.map(start => start.from_lat)
        const to_lat = this.state.data.map(to => to.to_lat)

        const from_long = this.state.data.map(start => start.from_long)
        const to_long = this.state.data.map(to => to.to_long)
        return (
            <div id="lines">
                    {this.state.data.map(({ City, from_lat, from_long, to_lat, to_long }) => {
                        return <Polyline key={City} positions={[
                            [from_lat, from_long], [to_lat, to_long],
                        ]} color={'red'} weight={0.8} />
                    })}
                    <RegionalMarker />
            </div>
        );
    }
}