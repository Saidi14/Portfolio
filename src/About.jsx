import AnchorLink from "react-anchor-link-smooth-scroll"
import codeImage from "/about.svg"
function About(){
    return(
        <div className="about">
            <div className="aboutText">
                <img src={codeImage}></img>
                <h1>Software Developer</h1>
                <p>
                    Hello! My name is Saidi. I am an aspiring full-stack developer, 
                    currently in my final year of studies. 
                    I am familiar with many programming languages and frameworks. I
                    have created full-stack websites, desktop applications and 
                    mobile applications.
                </p>
                <AnchorLink href="#footer">Contact</AnchorLink>
            </div>
        </div>
    )
}
export default About