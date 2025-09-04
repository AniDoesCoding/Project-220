import React from 'react';
import Banner from '../components/Banner'
import ProjectBody from '../components/ProjectBody';

const activeUser = {
    userName: 'User1', userID: 1
}

const ProjectPage = () => (
    <>
        <Banner current={activeUser} />
        <main>
          <ProjectBody />  
        </main>
    </>
);

export default ProjectPage;