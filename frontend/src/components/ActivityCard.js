import React from 'react';

const ActivityCard = ({ action }) => {
    return(
        <li className="acCard">
            {action.user} - {action.task} at {action.time}
        </li>
    )
    
}

export default ActivityCard;