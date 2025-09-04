import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const params = useParams();
    return (
        <li className="projCard">
            <Link to={`/project/${project.id}`}>{project.name}</Link> - {project.status}
        </li>
    )
        
}

export default ProjectCard;