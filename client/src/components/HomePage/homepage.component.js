import Footer from "../footer/footer.component";
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PickCoordMap from "./pickCoordMap.js";
import Search from "./Search/search.component";



export default class HomePage extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     countries: [],
                     searchField: ""
                   };
                 }

                 componentDidMount() {
                   fetch("http://localhost:3100/countries")
                     .then(result => result.json())
                     .then(countries => this.setState({ countries }));
                 }

                 handleChange = e => {
                   this.setState({
                     searchField: e.target.value
                   });
                 };
                 render() {


					  console.log(this.state.countries);

            const { searchField, countries } = this.state;

            const filterredSearch = countries.filter(
              ({ Country, City }) =>
                Country.toLowerCase().includes(searchField.toLowerCase()) ||
                City.toLowerCase().includes(searchField.toLowerCase())
            );
                   return (
                     <div>
                       <PickCoordMap />
                       <Search
                         handleChange={this.handleChange}
                         searchInfo={filterredSearch}
                       />
                       <Footer />
                     </div>
                   );
                 }
               };

