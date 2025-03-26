import React, {useState} from "react";
import ProjectCardInner from "./ProjectCardInner";
function ProjectCard(
    {
        title = "Project",
        description = "A very interesting description about my very interesting project",
        imageSrc = "https://placehold.co/400x300",
        imageAlt ="Project Image",
        technologies = ["Technology1", "Technology2"]
        
    }
){
    return(
        <div className="projectCard">
            <h2>{title}</h2>
            <ProjectCardInner imageSrc={imageSrc} imageAlt={imageAlt} description={description}/>
            <ul className="technologyList">
                {
                    technologies.map((technology) => (
                    <li>{technology}</li>
                    ))  
                }
            </ul>
        </div>
    )
}
export default ProjectCard