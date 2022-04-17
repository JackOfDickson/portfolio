import React from "react";
import styled from "styled-components"
import { keyframes } from "styled-components";
import whiteGithub from "../img/white-github-60.png"
import whiteLinkedin from "../img/white-linkedin-60.png"

const AboutMe = () => {

    //styled

    const StyledAboutMe = styled.div`
        color: white;
        text-align: center;
        margin: 0%;
        padding: 75px;
        padding-bottom: 0px;
        `

    const waveRight = keyframes`
    from {
        transform: rotate(0deg);
    }
    to  {
        transform: rotate(100deg);
    }`

    const Wave = styled.h1`
        animation: ${waveRight} 2s ease-in-out 0.5s infinite alternate;
    `

    const ExternalLinks = styled.img`
    width: 45px;
    height: 45px;
    margin-bottom: 30px;
    &:hover {
            width: 60px;
            height: 60px;
            background: #3271a8;
            border-radius: 30px;
            margin-bottom: 15px;
        }
    `

    return (
    <StyledAboutMe>
        <h1>Hello! My name is Jack!</h1>
        <Wave>👋🏻</Wave>
        <p>I am currently learning how to program</p>
        <ul>
            <a href="https://github.com/JackOfDickson">
            <ExternalLinks src={whiteGithub}></ExternalLinks>
            </a>
            <a href="https://www.linkedin.com/in/jackdickson/">
            <ExternalLinks src={whiteLinkedin}></ExternalLinks>
            </a>
        </ul>

    </StyledAboutMe>
    )
}

export default AboutMe