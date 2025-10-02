import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Banner = (current) => {
    console.log(current)
    return(
        <header>
            <h1><Link to={`/home`}>Memento</Link></h1>
            <div className='leftSide'>
                <SearchBar />
                <Link className='ownLink' to={`/profile/${current.current.userID}`}>{ current.current.userName }</Link>
            </div>
            
        </header>
    )
}

export default Banner;