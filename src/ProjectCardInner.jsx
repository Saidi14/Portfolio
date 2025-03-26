import React, {useState} from "react";

function ProjectCardInner({imageSrc, imageAlt, description}){
    let [textShown, setTextShown] = useState(false);
        let handleClick = () => {
        textShown = setTextShown(!textShown);}
    return(
        <div className="projectInnerContainer">
        <div className={textShown? "leftSideProjectCard": "leftSideProjectCardHidden"}>
            <div className="projectImage">
                <img src={imageSrc} alt = {imageAlt}/>
                <button className="hiddenButton" onClick={(e) => handleClick(e)}>
                    <span>{textShown? "Show Less" : "Show More"}</span>
                </button>
            </div>
        </div>
        <p className={textShown?"rightSideProjectCard": "rightSideProjectCardHidden"}>
            {description}
        </p>
    </div>
    )
}
export default ProjectCardInner