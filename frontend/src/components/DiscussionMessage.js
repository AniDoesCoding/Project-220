import React from 'react';

const DiscussionMessage = ({ discuss }) => {
    return(
        <li className="acCard">
            {discuss.user} says: {discuss.message}
        </li>
    )
    
}

export default DiscussionMessage;