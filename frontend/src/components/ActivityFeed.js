import React from 'react';
import ActivityCard from './ActivityCard';

const testFeed = [
    { user: 'User1', task: 'Checked In', time: '16:05'},
    { user: 'User2', task: 'Updated', time: '16:08'},
    { user: 'User1', task: 'Checked Out', time: '17:36'},
]

const ActivityFeed = () => {
    return(
        <div className='feedBody'>
            {testFeed.map((action, index) => (
                <ActivityCard key={index} action={action}/>
            ))}
        </div>
    )
}

export default ActivityFeed;