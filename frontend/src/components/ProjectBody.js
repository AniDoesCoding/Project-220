import React from 'react';
import { useParams } from 'react-router-dom';
import DiscussionFeed from './DiscussionFeed';
import ActivityFeed from './ActivityFeed';
import ProjectView from './ProjectView';
import ProjectCreate from './ProjectCreate';
import ProjectEdit from './ProjectEdit';

const ProjectBody = () => {
    const params = useParams();
    return(
        <>
            <ProjectView /> <br />
            <DiscussionFeed /> <br />
            <ActivityFeed /> <br />
            <ProjectCreate /> <br />
        </>
    ) 
}

export default ProjectBody;