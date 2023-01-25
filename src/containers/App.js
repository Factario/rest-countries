import React, { Component } from "react";
import CountryList from "../components/CountryList";
import SearchBox from "../components/SearchBox";
import Buttons from "../components/Buttons"
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
                <Buttons></Buttons>
                <Scroll>
                  <ErrorBoundry>
                <CountryList countries={filteredcountries} />
                  </ErrorBoundry>
                </Scroll>
                </div>
            );
}}

export default App