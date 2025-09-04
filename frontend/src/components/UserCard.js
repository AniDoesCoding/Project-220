import React from 'react';
import { useParams } from 'react-router-dom';

const UserCard = () => {
    const params = useParams();
    return(
        <>
            <img/>
            <h1>User { params.userID }</h1>
            <button>+ Add</button>
            <h2>Bio</h2>
            <p>Contact</p>
            <p>Location</p>
        </>
    )
    
}

export default UserCard;