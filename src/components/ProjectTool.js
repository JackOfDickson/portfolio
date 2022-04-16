import React from "react";

const ProjectTool = ({tool, index}) => {

    return (
        <li key={index}>{tool}</li>
    )
}

export default ProjectTool