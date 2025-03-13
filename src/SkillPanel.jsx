import SkillCard from "./SkillCard"

function SkillPanel(){
    return(
        <>
            <h2 style={{textAlign: "Center"}}>My Skills</h2>
            <div className="skillContainer">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </>
    )
}
export default SkillPanel