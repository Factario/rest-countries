import React, { Component } from "react";
import CountryList from "../components/CountryList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css"



class App extends Component {
    constructor() {
      super()
      this.state = {
        countries: [],
        searchfield: ''
      }
    }

    componentDidMount() {
        fetch('https://restcountries.com/v2/all?fields=name,region,area')
        .then(response=> response.json())
        .then(list => this.setState({countries: list})
        );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }

    selectChange = (event) => {
        this.setState({ CountryFilter: event.target.value })
      }

    render() {
        const { countries, searchfield } = this.state;
        const filteredcountries = countries.filter(countries =>{
            return countries.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !countries.length ? <h1 className="f1 tc">Loading</h1> :
           (
                <div className="tl">
                <SearchBox searchChange={this.onSearchChange}/>
                <br></br><br></br><br></br>
                <li>
                <button className="ma3 br3 w-10 pa3 b--green bg-light-green" onClick={() => alert("Button 1 clicked")}>Button 1</button>
                <button className="ma3 ml4 br3 w-10 pa3 b--green bg-light-green" onClick={() => alert("Button 2 clicked")}>Button 2</button>
                <select id='push' className="ma3 br3 w-10 pa3 b--green bg-light-green" onClick={this.selectChange}>
                <option value={null}>All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                </select>
                </li>
                <Scroll>
                  <ErrorBoundry>
                <CountryList countries={filteredcountries} />
                  </ErrorBoundry>
                </Scroll>
                </div>
            );
}}

export default App