import React from 'react';
import './Card.css';

const Card = (props) => {
    let cardItem = '';
    
    (props.isCompleted)? cardItem = 'card-completed': cardItem = 'card-not-complete';    

    return (
        <div className="card-item">
        <div className="check-div">
                    <input type = "checkbox"/>
                    <label>Complete</label>
        </div>  
        <div className= {cardItem}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        </div>
    )
}
