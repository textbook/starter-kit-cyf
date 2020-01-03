import L from 'leaflet';

const iconCyf = new L.Icon({
    iconUrl: require('./img/Ez_icon.png'),
    iconRetinaUrl: require('./img/Ez_icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconCyf };