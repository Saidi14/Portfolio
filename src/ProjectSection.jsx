import ProjectCard from "./ProjectCard"
import quickNote from "/quicknote.png";
import lightMinistries from "/lightMinistries.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ProjectSection(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        }
    }
    return(
        
        <div className="projectSection" id="projectSection">
            <h2>Projects</h2>
            <Carousel
            responsive={responsive}
            infinite={true}
            >
                    <ProjectCard
                    title="QuickNote"
                    imageSrc={quickNote}
                    technologies={["Java", "SQlite"]}
                    />
                    <ProjectCard
                    title="Light Ministries Website"
                    imageSrc={lightMinistries}
                    technologies={["HTML", "CSS","JavaScript"]}
                    />
            </Carousel>
        </div>
    )
}
export default ProjectSection