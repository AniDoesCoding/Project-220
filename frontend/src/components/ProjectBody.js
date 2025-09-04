import React from 'react';
import { useParams } from 'react-router-dom';
import DiscussionFeed from './DiscussionFeed';
import ActivityFeed from './ActivityFeed';
import ProjectView from './ProjectView';
import ProjectCreate from './ProjectCreate';
import ProjectEdit from './ProjectEdit';
import ProjectCheckin from './ProjectCheckin';

const ProjectBody = () => {
    const params = useParams();
    return(
        <>
            <ProjectView /> <br />
            <DiscussionFeed /> <br />
            <ActivityFeed /> <br />
            <ProjectCreate /> <br />
            <ProjectEdit /> <br />
            <ProjectCheckin /> <br />
        </>
    ) 
}

export default ProjectBody;