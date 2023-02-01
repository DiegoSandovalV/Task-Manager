import React from "react";
import './TodoButton.css';

function CreateTodoButton(props){
    const onClickButton = () =>{
        props.setOpenModal(true);
    };

    return(
        <button
            className="TodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };