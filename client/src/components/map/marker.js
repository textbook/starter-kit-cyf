import React, { Component } from "react";
import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { iconCyf } from "./icon";


Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

export default class MarkIt extends Component {

                 
                 render() {
                   return (
                     <div>
                       
                      
                     </div>
                   );
                 }
               }