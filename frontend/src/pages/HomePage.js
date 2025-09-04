import React from 'react';
import Banner from '../components/Banner'
import ActivityFeed from '../components/ActivityFeed'

const HomePage = () => (
    <>
        <Banner />
        <main>
            <h1>This Is The Bane Of My Existence</h1>
            <ActivityFeed />
        </main>
    </>
);

export default HomePage;