import L from 'leaflet';
import "./icon.css";

const iconCyf = new L.Icon({
    iconUrl: require("./img/Ez_icon.png"),
    iconRetinaUrl: require('./img/Ez_icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 37),
    className: 'leaflet-div-icon'
});

export { iconCyf };