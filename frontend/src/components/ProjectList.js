import React from 'react';
import ProjectCard from './ProjectCard';

const testFeed = [
    { name: 'New1', status: 'Owner', id: 123},
    { name: 'New2', status: 'Collaborator', id: 223}
]

const ProjectList = () => {
    return(
        <div className='profileProj'>
            <h3>Projects</h3>
            <div>
                {testFeed.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))} 
            </div>
        </div>    
    )
    
}

export default ProjectList;