import React from "react";
import Project from "../components/Project"


const ProjectBox = () => {

    const featuredProjects = [
        {title: "Ghibli Gallery",
        description: "A web application that grabs data from a Studio Ghibli api and displays information about the films. Films can be seleceted for more information",
        tools: ["JavaScript", "React"],
        link: "https://github.com/JackOfDickson/Ghibli-Gallery-react"},
        {title: "Hobbyist",
        description: "An application than manages members, lessons and bookings through a web page",
        tools: ["python3", "postgreSQL", "flask"],
        link: "https://github.com/JackOfDickson/Hobbyist_web_app"}
    ]

    const projectNodes = featuredProjects.map( (project, index) => {
        return (
            <Project project={project} key={index}/>
        )
    })

    return (
    <div>
        <h3>Some of my Projects</h3>
        {projectNodes}
    </div>
    )
}

export default ProjectBox