import React from 'react';
import DiscussionMessage from './DiscussionMessage';

const testFeed = [
    { user: 'User1', message: 'This suck'},
    { user: 'User2', message: 'Well damn'},
    { user: 'User2', message: 'That is just plain rude'},
]

const DiscussionFeed = () => {
    return(
        <div>
            {testFeed.map((discuss, index) => (
                <DiscussionMessage key={index} discuss={discuss}/>
            ))}
        </div>
    )
}

export default DiscussionFeed;