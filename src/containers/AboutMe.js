import React from "react";
import styled from "styled-components"

const AboutMe = () => {

    const StyledAboutMe = styled.div`
        color: white;
        margin: 0%;
        padding: 100px;`

    return (
    <StyledAboutMe>
        <h2>Hello I am Jack</h2>
        <p>I am currently learning how to program</p>

    </StyledAboutMe>
    )
}

export default AboutMe