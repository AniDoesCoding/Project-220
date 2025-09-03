import React from 'react';
import Banner from '../components/Banner'
import ActivityFeed from '../components/ActivityFeed'

const HomePage = () => (
    <>
        <Banner />
        <main>
            <ActivityFeed />
        </main>
    </>
);

export default HomePage;