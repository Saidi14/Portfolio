import ProjectCard from "./ProjectCard"
import quickNote from "/quicknote.png";

function ProjectSection(){
    return(
        <div className="projectSection">
            <h2>Projects</h2>
            <ProjectCard
            title="QuickNote"
            imageSrc={quickNote}
            technologies={["Java", "SQlite"]}
            />
        </div>
    )
}
export default ProjectSection