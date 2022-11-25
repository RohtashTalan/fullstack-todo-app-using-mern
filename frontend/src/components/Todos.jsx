import React, {useState, useEffect} from "react";
import axios from 'axios';
import {CreateTodoModal, CreateTaskModal, UpdateTaskModal, UpdateTodoModal, DeleteTask, DeleteTodo} from "./Modals";




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

    // useEffect to Call function
    useEffect(()=>{
        fetchTodosList();
    },[]);


// ************************************************Tasks functions*****************************************************************

    const [tasksList, setTasksList] = useState([]);
    const [tasksTodo, setTasksTodo] = useState('');

    // fetch Tasks list
    const fetchTasksList = async(id)=>{
        const getTasks = await axios.get("/listTasks/"+id);
        if(getTasks.status === 201){
            setTasksTodo(getTasks.data.tasks);
            let taskarray = getTasks.data.tasks.tasks;
            taskarray= taskarray.filter(x => x !== null);
            setTasksList(taskarray);
        }else{
            console.log("Something Went Wrong");
        }
    }


// Call Modal as per click by user
const [modal, setModal] = useState(null);


const callModal = (modalType) =>{
    const getModal = modalType;

    if(modal){
        setModal(null);
    }
    else{
    setModal(getModal);
}
    
      /* 
            Reload todo/tasks after create/update/delete
            */
     
    // modalId to reload tasklist or todolist

    
    let modalId = modalType.props.children.props.id
    

     if (getModal){
         if (modalId==='createTodoModal' || modalId==='updateTodoModal' || modalId==='deleteTodo') {
             fetchTodosList();
         }
         else{
             fetchTasksList(tasksTodo._id);

         }
     }
    
 }

    return(<>
{/* // left side for Todo listing */}
        <div className="w-2/5 ">
            <div className="shadow-lg shadow-gray-600 mb-6 flex">
                <h1 className="text-2xl font-bold p-4 w-4/5">Todos List</h1>
                <button type="button" onClick={()=>{callModal(CreateTodoModal())}} className="h-1/2 m-auto rounded-full bg-purple-600 p-1 text-3xl  text-white shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline" data-bs-dismiss="modal"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="px-4 divide-y">
                {todosList && todosList.map((todo) => (
                    <div className="flex w-full shadow-md shadow-gray-900 rounded bg-gray-100 mb-2 divide-x-2" >
                        <div onClick={() => { fetchTasksList(todo._id) }} className="w-4/5 p-2 px-4 hover:cursor-pointer hover:bg-violet-700 active:bg-violet-700">
                            <h1>{todo.title}</h1>
                        </div>
                        <div className="w-1/5 text-center ">
                            <i onClick={() => { callModal(UpdateTodoModal(todo._id)) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-pen p-2 hover:bg-violet-700"></i>
                            <i onClick={() => { callModal(DeleteTodo(todo._id)) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-trash p-2 hover:bg-violet-700"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
{/* // right side for Tasks Listing */}
<div className="w-3/5">
            <div className="shadow-lg flex shadow-gray-600 mb-6"><h1 className="text-2xl font-bold py-4 pl-4">Tasks List</h1>{tasksTodo ? (<><h1 className="text-2xl font-bold py-4 px-2 uppercase">: {tasksTodo.title}</h1>
            <button type="button" onClick={()=>{callModal(CreateTaskModal(tasksTodo._id));}} className="h-1/2 w-1/5 m-auto rounded-full bg-purple-600 p-3 text-2xl font-bold  text-white shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline" data-bs-dismiss="modal">Add Task</button>
            </>) : ('')}
            </div>
            <div className="px-4">
                {tasksList && tasksList.map((item) => (
                    <div className="flex w-full shadow-md shadow-gray-900 rounded bg-gray-100 mb-2 divide-x-2" >
                        <div className="w-4/5 p-2 px-4 hover:cursor-pointer hover:bg-violet-700 active:bg-violet-700">
                            <h1>{item.task}</h1>
                        </div>
                        <div className="w-1/5 text-center ">
                            <i onClick={() => { callModal(UpdateTaskModal(tasksTodo._id + "_" + item._id))}} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-pen p-2 hover:bg-violet-700"></i>
                            <i onClick={() => { callModal(DeleteTask(tasksTodo._id + "_" + item._id))}} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-trash p-2 hover:bg-violet-700"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {modal ? (modal):''}

 </>)
}


export default TodosList;