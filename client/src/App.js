import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

//Components
import Search from "./components/Search/search.component";
import NavBar from "./components/nav/nav.component";
import HomePage from "./components/HomePage/homepage.component";
import About from "./components/pages/About";
import Home from './components/pages/Home';
import Ourwork from "./components/pages/Ourwork";




class App extends Component {
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
          //  console.log to see the data coming from the database.
           console.log(this.state.countries);

           const { searchField, countries } = this.state;

           const filterredSearch = countries.filter(
             ({ Country, City }) =>(Country.toLowerCase().includes(searchField.toLowerCase()) ||
               City.toLowerCase().includes(searchField.toLowerCase()))
           );
           return (
             <>
         
               <Route exact path="/" />
               <Route exact path="/home" component={Home} />
               <Route exact path="/ourwork" component={Ourwork} />
               <Route path="/about" component={About} />
           

              <NavBar />

               <Search
                 handleChange={this.handleChange}
                 searchInfo={filterredSearch}
               />
               <HomePage />
               </>
           );
         }
       }


            

export default App;
