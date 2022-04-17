import React from "react";
import ProjectTool from "./ProjectTool";

const Project = ({project}) => {

    const madeWithNodes = project.tools?.map( (tool, index) => {
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
        <p><a href={project.link}>Github</a></p>
    </div>
    )
}

export default Project