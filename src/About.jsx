import home from "/home.png";
function About(){
    return(
        <div className="about">
            <div className="aboutText">
                <h1>Software Developer</h1>
                <p>
                    Hello! My name is Saidi. I am an aspiring full-stack developer, 
                    currently in my final year of studies. 
                    I am familiar with may programming languages and frameworks and 
                    and have developed full-stack websites, desktop applications and 
                    mobile applications.
                </p>
            </div>
            <img src={home} alt="Home Image"/>
        </div>
    )
}
export default About