import React from "react";
import "./EmptyTodos.css"
import SpaceShipImg from "../img/SpaceShip.png"

function EmptyTodos(){
    return(
        <div className="ContainerEmptyTodos">
            <p className="emptyTodoText">Create your first Task!</p>
            <img className="Spaceship" src={SpaceShipImg}/>
        </div>
        
    )
}

export { EmptyTodos };

