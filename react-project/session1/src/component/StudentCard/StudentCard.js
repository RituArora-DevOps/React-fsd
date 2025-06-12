import "./StudentCard.css";
import "../../App.module.css"

export default function StudentCard(props) {
    const cardStyle = {
        position: "absolute",
        top: 0, 
        left: 0,
        color: props.color,
        border: "1px solid black"
    } 
    console.log("props", props);
    return (
        <div>
            <h1 className="title">Student Card</h1>
            <p style={cardStyle}>Name : {props.name}</p>
            <p className= {props.highlight}>Age : {props.age}</p>
        </div>
    );
}