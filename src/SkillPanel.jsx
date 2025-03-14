import SkillCard from "./SkillCard"
import java from "/java-icon.svg"
import react from "/react.svg"
import android from "/android.svg"
import backend from "/backend.svg"
import cloud from "/cloud.svg"
import git from "/git.svg"
function SkillPanel(){
    return(
        <>
            <h2 style={{textAlign: "Center"}}>Skills</h2>
            <div className="skillContainer">
                <SkillCard
                    title = "Java"
                    content = "I have experience with the Java language as well as common Java APIs such as Swing and JDBC."
                    imageSrc={java}
                    imageAlt="Java Image"
                />
                <SkillCard
                    title="Frontend Development"
                    content="Experienced with HTML, CSS, JavaScript and React"
                    imageSrc={react}
                    imageAlt="React icon"
                />
                <SkillCard
                    title="Mobile Development"
                    content="I have experience Using Android Studio, Kotlin as well as React Native."
                    imageSrc={android}
                    imageAlt="android icon"
                />
                <SkillCard
                    title="Backend Development"
                    content=""
                    imageSrc={backend}
                />
                <SkillCard
                    title="Cloud Computing"
                    content="Experience with AWS and Google Cloud"
                    imageSrc={cloud}
                />
                <SkillCard
                    title="Other Technologies"
                    content=""
                    imageSrc={git}
                />
            </div>
        </>
    )
}
export default SkillPanel