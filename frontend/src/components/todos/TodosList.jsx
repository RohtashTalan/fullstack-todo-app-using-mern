import React, {useState} from "react";
import axios from 'axios';
import { useEffect } from "react";


 
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

 useEffect(()=>{
    fetchTodosList();
 },[])


 
 const CreateTodoModal = () => {
    // create todo in database
  const createTodo = async()=>{
    const title = document.getElementById('todoTitle').value;
    const sendData = await axios.post("/createTodo",{title});
    document.getElementById('todoTitle').value=null;
    fetchTodosList();
  }
  // handle submit of form
    const handleSubmit = (event) =>{
      event.preventDefault();
      createTodo();
    }
  
      const handleClick = () => {
          // 👇️ toggle class on click
          document.getElementById('createTodoModal').classList.toggle('hidden');
          
        };
      
  
      return(
          <>
  
  {/* ********** modal  */}
  <div className="modal fade rounded h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 shadow-lg shadow-gray-900 outline" id="createTodoModal" tabindex="-1" aria-labelledby="createTodoLabel">
    <div className="modal-dialog pointer-events-none relative w-auto">
      <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
        <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
          <h5 className="text-xl font-medium leading-normal text-gray-800" id="createTodoLabel">Create TODO</h5>
          <button type="button" className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" onClick={handleClick}>X</button>
        </div>
        <div className="modal-body relative p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input type="text" className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" name="title" id="todoTitle" placeholder="Name" />
            </div>
            <button type="submit" className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">CREATE</button>
          </form>
        </div>
        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
          <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  </div>
  </> )
  }
    
  const UpdateTodoModal = (id) => {
    // create todo in database
  const updateTodo = async()=>{
    const title = document.getElementById('todoTitle').value;
    const sendData = await axios.put("/updateTodo/"+id,{title});
    document.getElementById('todoTitle').value=null;
    fetchTodosList();
  }
  // handle submit of form
    const handleSubmit = (event) =>{
      event.preventDefault();
      updateTodo();
    }
  
      const handleClick = () => {
          // 👇️ toggle class on click
          document.getElementById('updateTodoModal').classList.toggle('hidden');
          
        };
      
  
      return(
          <>
  
  {/* ********** modal  */}
  <div className="modal fade rounded h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 shadow-lg shadow-gray-900 outline" id="updateTodoModal" tabindex="-1" aria-labelledby="updateTodoModalLabel">
    <div className="modal-dialog pointer-events-none relative w-auto">
      <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
        <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
          <h5 className="text-xl font-medium leading-normal text-gray-800" id="updateTodoModalLabel">UPDATE TODO</h5>
          <button type="button" className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" onClick={handleClick}>X</button>
        </div>
        <div className="modal-body relative p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input type="text" className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" name="title" id="todoTitle" placeholder="Name" />
            </div>
            <button type="submit" className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Update</button>
          </form>
        </div>
        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
          <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  </div>
  </> )
  }
  
  const DeleteTodo = (id) =>{
    const deleteTodo = async()=>{
      const sendData = await axios.delete("/deleteTodo/"+id);
      fetchTodosList();
    }
    deleteTodo();
    
    const handleClick = () => {
      // 👇️ toggle class on click
      document.getElementById('deleteTodo').classList.toggle('hidden');
      
    };
  
    return(<>
     <div className="fade h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 rounded shadow-lg shadow-gray-900 outline" id="deleteTodo" tabindex="-1">
    <div className="w-auto">
      <div className="relative flex w-full flex-col rounded-md shadow-lg bg-white">
        <div className="flex rounded-t-md p-4">
          <h5 className="m-auto text-xl font-medium text-gray-800">Todo Delteted Successfully</h5>
        </div>
        <div className="flex justify-center rounded-b-md border-t border-gray-200 p-2">
          <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-lg" onClick={()=>{handleClick()}}>Close</button>
        </div>
      </div>
    </div>
  </div>
      </>)
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

// TodosList();


export default TodosList;