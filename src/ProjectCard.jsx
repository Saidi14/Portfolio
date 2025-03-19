import React, {useState} from "react";
function ProjectCard(
    {
        title = "Project",
        description = "A very interesting description about my very interesting project",
        imageSrc = "https://placehold.co/400x300",
        imageAlt ="Project Image",
        technologies = ["Technology1", "Technology2"]
        
    }
){  
    let [textShown, setTextShown] = useState(false);
    let handleClick = () => {
        textShown = setTextShown(!textShown);
    }
    return(
        <div className="projectCard">
            <div className={textShown? "leftSideProjectCard": "leftSideProjectCardHidden"}>
                <h2>{title}</h2>
                <div className="projectImage">
                    <img src={imageSrc} alt = {imageAlt}/>
                    <button className="hiddenButton" onClick={(e) => handleClick(e)}>
                        <span>{textShown? "Show Less" : "Show More"}</span>
                    </button>
                </div>
                <ul className="technologyList">
                    {
                        technologies.map((technology) => (
                        <li>{technology}</li>
                        ))  
                    }
                </ul>
            </div>
            <p className={textShown?"rightSideProjectCard": "rightSideProjectCardHidden"}>
                {description}
            </p>
        </div>
    )
}
export default ProjectCard