function SkillCard(
    {title = "default title", 
    imageAlt = "Skill Image", 
    imageSrc = "https://placehold.co/150x150", 
    content = "An interesting description about my skill"}
){
    return(
        <div className="skillCard">
            <img src={imageSrc} alt={imageAlt}></img>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default SkillCard