  
import React from "react"

function Dice(props) {
    const style = {
        border: "black solid 2px", 
        textAlign: "center",
        width: 120,
        gridColumn: "span 1",
        padding: 10,
        
    }
    return (
        <div style={style}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Dice