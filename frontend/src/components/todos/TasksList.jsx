import React,{useState} from "react";
import axios from "axios";
import {CreateTaskModal, UpdateTaskModal, DeleteTask} from "./Modals";


const TasksList = () =>{
    const todoId = window.location.pathname;

    const [tasksList, setTasksList] = useState([]);
    const [tasksTodo, setTasksTodo] = useState('');

    // fetch Tasks list
    const fetchTasksList = async(id)=>{
        const getTasks = await axios.get("/listTasks/"+id);
        if(getTasks.status === 201){
            setTasksTodo(getTasks.data.tasks);
            let taskarray = getTasks.data.tasks.tasks;
            setTasksList(taskarray);
        }else{
            console.log("Something Went Wrong");
        }
    }

     if(todoId != '/'){
        fetchTasksList(todoId)
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

    return(<>
    <div className="p-1 rounded bg-blue-800 flex justify-between mb-2 text-white">
                        <h2 className="m-auto text-2xl font-bold text-gray-200">Todo List {tasksTodo ? (<><span className="text-2xl font-bold py-4 px-2 uppercase">: {tasksTodo.title}</span></>) : ('')}</h2>
                        <div className="pr-2">
                        <i onClick={()=>{callModal(CreateTaskModal(tasksTodo._id))}} class="fa-solid fa-plus bg-gray-800 p-2 rounded-lg text-center text-2xl hover:cursor-pointer hover:cursor-pointer hover:bg-blue-600"></i>
                        </div>
                    </div>
    <div className="h-[90%] overflow-y-auto px-2">
{tasksList && tasksList.map((item)=>(
             <div className="flex w-full bg-gray-400 rounded p-2 shadow-lg mb-2">
             <h1 className="w-5/6 font-bold text-gray-900 text-2xl m-auto">
             {item.task}
             </h1>
             <div className="flex w-1/6 justify-end text-white">
             <i onClick={()=>{callModal(UpdateTaskModal(tasksTodo._id + "_" + item._id))}} class="fa-regular fa-pen-to-square bg-gray-800 p-2 rounded text-center hover:cursor-pointer hover:cursor-pointer hover:bg-blue-600"></i>
             <i onClick={()=>{callModal(DeleteTask(tasksTodo._id + "_" + item._id))}} class="fa-solid fa-trash-can bg-gray-800 p-2 rounded text-center hover:cursor-pointer hover:bg-blue-600 mx-6"></i>
             </div>
         </div>
          
))}
</div>

{isModal ? (modal):(loadModal())}
    </>)
}

export default TasksList;