import React, { useState } from 'react';

function CountryFilter() {
  const [data,] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');


  function handleRegionChange(event) {
    setSelectedRegion(event.target.value);
    setFilteredData(data.filter(country => country.region === event.target.value));
  }

  return (
    <div>
      <label>
        Region:
        <select id='push' className="ma3 br3 w-10 pa3 b--green bg-light-green" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
      <ul>
        {filteredData.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryFilter;