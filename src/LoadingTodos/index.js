import React from "react";
import "./LoadingTodos.css"

function LoadingTodos(){
    return(
        <div className="LoadingContainer">
            <div className="Circle"></div>
            <div className="Circle"></div>
            <div className="Circle"></div>
        </div>
    )
}

export { LoadingTodos };