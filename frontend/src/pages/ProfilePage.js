import React from 'react';
import Banner from '../components/Banner'
import UserCard from '../components/UserCard'
import ProjectList from '../components/ProjectList'

const activeUser = {
    userName: 'User1', userID: 1
}

const ProfilePage = () => (
    <>
        <Banner current={activeUser} />
        <main>
            <UserCard />
            <ProjectList />
        </main>
    </>
);

export default ProfilePage;