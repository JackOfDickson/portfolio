import React from 'react'
import AboutMe from '../containers/AboutMe'
import ProjectBox from '../containers/ProjectBox'
import styled from 'styled-components'

const Page = () => {

    //styled

    const StyledPage = styled.div`
    height: 100vh;
    background: rgb(2,0,31);
    background: linear-gradient(180deg, rgba(2,0,31,1) 0%, rgba(0,0,101,1) 60%, rgba(0,120,209,1) 100%);

    `

    return (
    <StyledPage>
        <AboutMe/>
        <ProjectBox/>
    </StyledPage>
    )
}

export default Page