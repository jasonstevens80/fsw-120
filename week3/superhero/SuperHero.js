import React from 'react'

function SuperHero(props) {

    const Hello = () => {
        alert(props.catchPhrase)
    }

    return (
        <div>
            <div>
                <div onClick={Hello}>
                    <h1 >{props.name}</h1>
                    <img className="resize" src={props.imageName} />
                </div>
            </div>
            <p>From: {props.show}</p>

        </div>
    )
}




export default SuperHero