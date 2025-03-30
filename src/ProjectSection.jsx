import ProjectCard from "./ProjectCard"
import quickNote from "/quicknote.png";
import lightMinistries from "/lightMinistries.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import lmWebsite from "/LMWebsite/index.html?url"
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
                    description=
                    {<>QuickNote is a desktop notepad application developed in Java 
                    It makes use of the Java Swing framework for the user interface and an SQLite 
                    database for data storage and management. Users can log in, take notes and view 
                    notes that they have created</>}
                    />
                    <ProjectCard
                    title="Light Ministries Website"
                    imageSrc={lightMinistries}
                    technologies={["HTML", "CSS","JavaScript"]}
                    description=
                    {<>This website was created with the help of a friend for a church in my community.
                    While not currently live, it can be viewed <a href={lmWebsite}>here</a></>}
                    />
            </Carousel>
        </div>
    )
}
export default ProjectSection