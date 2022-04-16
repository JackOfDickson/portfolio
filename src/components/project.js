import React from "react";
import ProjectTool from "./ProjectTool";

const Project = ({project}) => {

    const madeWithNodes = project.madeWith?.map( (tool, index) => {
        return (
            <ProjectTool tool={tool} key={index}/>
        )
    })

    return (
    <div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <p>Made with:</p>
        <ul>
            {madeWithNodes}
        </ul>
    </div>
    )
}

export default Project