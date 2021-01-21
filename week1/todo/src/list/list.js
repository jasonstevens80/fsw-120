import React from 'react'
import Card from './Card'
import './List.css'

const List = () => {

    let myItems = [
        {
        title: "Do homework for FSW-120",
        description: "Week 1 Pause and Practice",
        isCompleted: true
        },
        {
            title: "clean house",
            description: "Deep clean kitchen",
            isCompleted: false
        },
        {
            title: "Excercise dog",
            description: "Take Minca to dog park",
            isCompleted: false
        }
    ]

    const mappedTheItems = myItems.map((item) => {
        return(
            <div >                              
                <Card 
                    title = {item.title}
                    description = {item.description}
                    isCompleted = {item.isCompleted}
                />                
            </div>
        );
    })

    return(
        <div>
            <h1 className = "todo-name">My ToDo List....</h1>
            {mappedTheItems}
        </div>
    )
}

export default List;