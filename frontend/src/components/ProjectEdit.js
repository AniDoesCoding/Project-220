import React from 'react';

const ProjectEdit = () => {
    return(
        <>
            <form>
                <label>Project Name:<input placeholder="FancyProject"/></label> <br />
                <label>Description:<input placeholder="This is a project"/></label> <br />
                <label>Visibility:<input placeholder="Public"/></label> <br />
                <label>Collaborators:<input placeholder="ThatFool"/></label> <br />
                <label>Languages:<input placeholder="React"/></label> <br />
            </form>
        </>
    ) 
}

export default ProjectEdit;