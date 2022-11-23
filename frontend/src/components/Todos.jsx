import React, {useState, useEffect} from "react";
import axios from 'axios';



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

    // handle todos edit
    const editTodo = (id) =>{

        console.log("edit working: "+id);
    }

     // handle todos delete
    const deleteTodo = (id) =>{
        console.log("delete working: "+id);
    }

    const getTasks = () =>{

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

        // handle task edit
        const editTask = async(id) =>{
            let idArray = id.split("_");
            let todoId = idArray[0];
            let taskId = idArray[1];
            console.log(`
            TodoId : ${todoId}
            TaskId : ${taskId}
            `);

        }
    
         // handle task delete
        const deleteTask = (id) =>{
    
        }

    return(<>
{/* // left side for Todo listing */}
        <div className="w-2/5 ">
            <div className="shadow-lg shadow-gray-600 mb-6"><h1 className="text-2xl font-bold p-4">Todos List</h1></div>
            <div className="px-4 divide-y">
                {todosList && todosList.map((todo) => (
                    <div className="flex w-full shadow-md shadow-gray-900 rounded bg-gray-100 mb-2 divide-x-2" >
                        <div onClick={() => { fetchTasksList(todo._id) }} className="w-4/5 p-2 px-4 hover:cursor-pointer hover:bg-violet-700 active:bg-violet-700">
                            <h1>{todo.title}</h1>
                        </div>
                        <div className="w-1/5 text-center ">
                            <i onClick={() => { editTodo(todo._id) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-pen p-2 hover:bg-violet-700"></i>
                            <i onClick={() => { deleteTodo(todo._id) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-trash p-2 hover:bg-violet-700"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
{/* // right side for Tasks Listing */}
<div className="w-3/5">
            <div className="shadow-lg shadow-gray-600 mb-6"><h1 className="text-2xl font-bold p-4 uppercase">Tasks List {tasksTodo ? (" : " + tasksTodo.title) : ('')}</h1></div>
            <div className="px-4">
                {tasksList && tasksList.map((item) => (
                    <div className="flex w-full shadow-md shadow-gray-900 rounded bg-gray-100 mb-2 divide-x-2" >
                        <div className="w-4/5 p-2 px-4 hover:cursor-pointer hover:bg-violet-700 active:bg-violet-700">
                            <h1>{item.task}</h1>
                        </div>
                        <div className="w-1/5 text-center ">
                            <i onClick={() => { editTask(tasksTodo._id + "_" + item._id) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-pen p-2 hover:bg-violet-700"></i>
                            <i onClick={() => { deleteTask(tasksTodo._id + "_" + item._id) }} className="w-1/2 h-full hover:cursor-pointer fa-solid fa-trash p-2 hover:bg-violet-700"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       

 </>)
}


export default TodosList;