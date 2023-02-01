import React from "react";
import './TodoItems.css';
import checkMark from '../img/checkmark.png';
import Trash from '../img/TrashCan.svg'

function TodoItems(props){


    return(
        <li className="TodoItem">
            <span>
                <img
                className={`TrashCan ${props.completed && 'TrashCan--Completed'}`}
                src={Trash}
                onClick={props.onDelete}></img>
            </span>

            <p
            className={`Text ${props.completed && 'Text--Completed'}`}>
                {props.text}
                </p>

            <span>
                <div
                className={`CheckCircle ${props.completed && 'CheckCircle--Completed'}`}>
                    <img
                    className={`CheckMark ${props.completed && 'CheckMark--Completed'}`} src={checkMark}
                    onClick={props.onToggleCompleteTodo}></img>
                </div>
            </span>
        </li>
    );
}

export { TodoItems };