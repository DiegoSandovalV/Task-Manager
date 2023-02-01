import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (e) =>{
        setNewTodoValue(e.target.value);
    }


    const {
        AddTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!newTodoValue.trim()){
            alert('Write the Task before adding :)');
        }else{
            AddTodo(newTodoValue);
            setOpenModal(false);
        }
        
    };


    return(
        <form onSubmit={onSubmit} className="Form">
            <label>Create Your Task</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Buy Bread"
                className="TextArea"
            />
            <div className="ButtonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="CancelButton"
                >
                    Cancel
                </button>
                
                <button
                    type="submit"
                    className="SubmitButton"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm }