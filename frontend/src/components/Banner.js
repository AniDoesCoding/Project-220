import React from 'react';
import SearchBar from './SearchBar';

const Banner = (current) => {
    return(
        <header>
            <SearchBar />
            <p>{current.userName}</p>
        </header>
    )
}

export default Banner;