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
        margin: 0;
        `

    const ToolList = styled.ul`
        display: flex;
        flex-wrap: wrap;
        
        `

    return (
    <ProjectContainer>
        <Title><a href={project.link}>{project.title}</a></Title>
        <p>{project.description}</p>
        <p>Made with:</p>
        <ToolList>
            {madeWithNodes}
        </ToolList>
    </ProjectContainer>
    )
}

export default Project