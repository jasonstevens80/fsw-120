import React from "react"
import "./App"
function Card(props){
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    return(
        <div style={styles}>   
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.info}</p>
        </div>
    )
}
Card.defaultProps = {
    cardColor: "purple",
    height: 300,
    width: 300
}
export default Card