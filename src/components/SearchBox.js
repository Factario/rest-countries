import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa3'>
        <input
          className='pa3 fl w-30 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search countries'
          onChange={searchChange}></input>
    </div>
  );
}


export default SearchBox;