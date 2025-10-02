import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner'
import UserCard from '../components/UserCard'
import ProjectList from '../components/ProjectList'

const activeUser = {
    userName: 'User1', userID: 1
}

const ProfilePage = () => {
    const { id } = useParams();

    const fetchUser = async () => {
        try {
            const response = await fetch(`/api/users/${id}`);
            console.log("egg");
            if (!response.ok) throw new Error('User not found');
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Failed to load profile: ' + err.message);
            navigate('/home');
        }
    }

    return (
    <>
        <Banner current={activeUser} />
        <main>
            <UserCard view={fetchUser}/>
            <ProjectList />
        </main>
    </>
    )
};

export default ProfilePage;