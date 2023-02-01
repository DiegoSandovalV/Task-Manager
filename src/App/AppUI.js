import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItems } from "../TodoItems";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { LoadingTodos } from "../LoadingTodos";
import { ErrorTodos } from "../ErrorTodos";
import "./TitleStyle.css";

function AppUI(){
    const {
            error,
            loading,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>

        <h1>My
            <span> Tasks</span>
        </h1>     
        <TodoCounter/>
            
        <TodoSearch/>


        <TodoList>
                    
        {error && <ErrorTodos error={error} />}
        {loading && <LoadingTodos/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}

        {searchedTodos.map(todo => (
        <TodoItems
            key={todo.text} //Key ayuda a React a identificar renders
            text={todo.text}
            completed={todo.completed}
            onToggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            /> 
        ))}
        </TodoList>


            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

        <CreateTodoButton
            setOpenModal={setOpenModal}
        />


    </React.Fragment>

    );
}

export { AppUI };