import timeLineElements from "./TimeLineElements";

function TimeLine(){
    let timeLineMap = timeLineElements.map(element =>
        <div key={element.id} className="timeLineElement">
            <h2>{element.title}</h2>
            <p>{element.year}</p>
            <p>{element.description}</p>
        </div>
    );
    return(
        <div className="timeLineContainer">
            <h1>TimeLine</h1>
            {timeLineMap}
        </div>
    )
}
export default TimeLine