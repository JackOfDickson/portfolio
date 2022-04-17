import React from "react";
import ProjectTool from "./ProjectTool";
import styled from "styled-components"

const Project = ({project}) => {

    const madeWithNodes = project.tools?.map( (tool, index) => {
        return (
            <ProjectTool tool={tool} key={index}/>
        )
    })

    //styled

    const ProjectContainer = styled.div`
        width:320px;
        margin-left: 20px;
        margin-right: 20px;
        `

    const Title = styled.h4`
        text-align: center;
        `

    return (
    <ProjectContainer>
        <Title>{project.title}</Title>
        <p>{project.description}</p>
        <p>Made with:</p>
        <ul>
            {madeWithNodes}
        </ul>
        <p><a href={project.link}>Github</a></p>
    </ProjectContainer>
    )
}

export default Project