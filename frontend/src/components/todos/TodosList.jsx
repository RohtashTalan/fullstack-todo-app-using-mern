import React, {useState} from "react";
import axios from 'axios';
import {CreateTodoModal,UpdateTodoModal, DeleteTodo} from "./Modals";

const TodosList = () => {
    const [todosList, setTodosList] = useState([]);

    // fetch todos list
    const fetchTodosList = async()=>{
        const getTodos = await axios.get("/listTodos");
        if(getTodos.status === 201){
            setTodosList(getTodos.data.todosList);
        }else{
            console.log("Something Went Wrong");
        }
    }

// Call Modal as per click by user
const [modal, setModal] = useState(null);
const [isModal, setIsModal] = useState(false);

const loadModal = () => {
    return(
        <>
        {modal ? (modal):''}
        {' '}</>
    )
}

const callModal = (modalType) =>{
    const getModal = modalType;
    setModal(getModal);

    if(isModal){
        setIsModal(false);
    }else{
        setIsModal(true);
    }
 }

 
 const todoId = window.location.pathname;

    if(todoId != '/'){
        fetchTodosList();
    }

    return(<>
    <div className="p-1 rounded bg-blue-800 flex justify-between mb-2 text-white">
                        <h2 className="m-auto text-2xl font-bold text-gray-200">Todos List</h2>
                        <i onClick={()=>{callModal(CreateTodoModal())}} class="fa-solid fa-plus bg-gray-800 p-2 rounded-lg text-center text-2xl hover:cursor-pointer hover:cursor-pointer hover:bg-blue-600 pr-2"></i>
                    </div>
    <div className="h-full overflow-y-auto px-2">
                        
            {todosList && todosList.map((todos)=>(
                <div className="flex w-full bg-gray-400 rounded shadow-lg mb-2">
                    <div className="w-4/6 text-gray-900 hover:bg-blue-800 hover:text-white hover:rounded hover:cursor-pointer py-2 p-2">
                        <a href={'/'+todos._id}>
                        <h1 className="font-bold text-xl m-auto">
                            {todos.title}
                        </h1>
                        </a>
                    </div>
                    <div className="flex h-[2rem] px-2 m-auto w-2/6 justify-between text-white">
                        <i onClick={()=>{callModal(UpdateTodoModal(todos._id))}} class="fa-regular fa-pen-to-square bg-gray-800 p-2 rounded text-center hover:cursor-pointer hover:cursor-pointer hover:bg-blue-600"></i>
                        <i onClick={()=>{callModal(DeleteTodo(todos._id))}} class="fa-solid fa-trash-can bg-gray-800 p-2 rounded text-center hover:cursor-pointer hover:bg-blue-600"></i>
                    </div>
                </div> ))}   
    </div>
    
{isModal ? (modal):(loadModal())}
 </>)
}


export default TodosList;