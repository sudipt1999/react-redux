import React from 'react';
import './SearchBox.css';


const SearchBox =({searchField,searchChange}) =>{
    return(
        <div className='pa3 ba b--green bg-lightest-blue'>
        <input className='search-bar' type='search' placeholder='search robots' onChange={searchChange}  />
        </div>
    );
}

export default SearchBox;