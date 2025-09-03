import React from 'react';
import Banner from '../components/Banner'
import UserCard from '../components/UserCard'
import ProjectList from '../components/ProjectList'

const HomePage = () => (
    <>
        <Banner />
        <main>
            <UserCard />
            <ProjectList />
        </main>
    </>
);

export default HomePage;