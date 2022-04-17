import React from "react";
import styled from "styled-components"

const ProjectTool = ({tool, index}) => {

    //Styled
    
    const StyledTool = styled.li`
    list-style: none;
    `

    return (
        <StyledTool key={index}>{tool}</StyledTool>
    )
}

export default ProjectTool