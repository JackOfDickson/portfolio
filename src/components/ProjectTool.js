import React from "react";
import styled from "styled-components"

const ProjectTool = ({tool, index}) => {

    //Styled
    
    const StyledTool = styled.li`
    list-style: none;
    margin-right: 20px;
    padding: 4px;
    border-color: white;
    border: 2px solid;
    border-radius: 5px;
    `

    return (
        <StyledTool key={index}>{tool}</StyledTool>
    )
}

export default ProjectTool