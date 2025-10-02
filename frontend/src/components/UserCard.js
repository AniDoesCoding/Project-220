import React from 'react';
import { useParams } from 'react-router-dom';

const UserCard = (view) => {
    const params = useParams();
    return(
        <div className='profileBox'>
            <div className='profileHead'>
                <img className='profileImg' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
            <h1 className='pageHead'>{view.name}</h1>
            <button>+ Add</button>
            </div>
        
            <h2 className='profileBio'>Bio</h2>
            <p className='profileBonus'>Contact</p>
            <p className='profileBonus'>Location</p>
        </div>
    )
    
}

export default UserCard;