function SkillCard(
    {title = "default title", 
    imageAlt = "Skill Image", 
    imageSrc = "https://placehold.co/150x150",
    content = ["item1", "item2"]
    }
){
    return(
        <div className="skillCard">
            <img src={imageSrc} alt={imageAlt}></img>
            <h3>{title}</h3>
            <ul>
                {
                content.map((contentItem) => (<li>{contentItem}</li>))
                }
            </ul>
        </div>
    )
}
export default SkillCard