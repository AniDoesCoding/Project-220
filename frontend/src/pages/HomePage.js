import React from 'react';
import Banner from '../components/Banner'
import ActivityFeed from '../components/ActivityFeed'

const activeUser = {
    userName: 'User1', userID: 1
}

const HomePage = () => (
    <>
        <Banner current={activeUser}/>
        <main>
            <h1 className='pageHead'>Activity</h1>
            <ActivityFeed />
        </main>
    </>
);

export default HomePage;