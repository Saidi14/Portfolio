import SkillCard from "./SkillCard"
import java from "/java-icon.svg"
import react from "/react.svg"
import android from "/android.svg"
import backend from "/backend.svg"
import cloud from "/cloud.svg"
import git from "/git.svg"
function SkillPanel(){
    return(
        <div className="skillBg" id="skillBg">
            <h1 id="Skills" style={{textAlign: "Center"}}>Skills</h1>
            <div className="skillContainer" id="SkillPanel">
                <SkillCard
                    title = "Java"
                    content = {["OOP", "Swing", "JDBC"]}
                    imageSrc={java}
                    imageAlt="Java Image"
                />
                <SkillCard
                    title="Frontend Development"
                    content={["HTML", "CSS", "React"]}
                    imageSrc={react}
                    imageAlt="React icon"
                />
                <SkillCard
                    title="Mobile Development"
                    content={["Android Studio", "Kotlin", "React Native"]}
                    imageSrc={android}
                    imageAlt="android icon"
                />
                <SkillCard
                    title="Backend Development"
                    content={["PHP", "SQLite", "Firebase"]}
                    imageSrc={backend}
                />
                <SkillCard
                    title="Cloud Computing"
                    content={["AWS", "Google Cloud"]}
                    imageSrc={cloud}
                />
                <SkillCard
                    title="Other Technologies"
                    content={["Git"]}
                    imageSrc={git}
                />
            </div>
        </div>
    )
}
export default SkillPanel