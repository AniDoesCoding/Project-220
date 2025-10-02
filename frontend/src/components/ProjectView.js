import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const projectFace = {
    owner: 'User1', userID: 1
}

const ProjectView = () => {
    const params = useParams();
    return(
        <div className='projView'>
            <img/>
            <h1>Project { params.projID }</h1>
            <Link to={`/profile/${projectFace.userID}`}>{projectFace.owner}</Link> <br />
            <button>Activity</button>
            <button>Discussion</button>
            <button>Manage</button>
            <button>Files</button>
            <h2>A project</h2>
            <h3>#Tags #of #Languages</h3>
            <p>Created 01/01/2024 - Recent Update 04/09/2025</p>
        </div>
    )
    
}

export default ProjectView;