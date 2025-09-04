import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Banner = (current) => {
    console.log(current)
    return(
        <header>
            <SearchBar />
            <Link to={`/profile/${current.current.userID}`}>{ current.current.userName }</Link>
        </header>
    )
}

export default Banner;