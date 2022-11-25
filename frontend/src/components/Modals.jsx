import React, {useState} from "react";
import axios from "axios";



const CreateTodoModal = () => {
  // create todo in database
const createTodo = async()=>{
  const title = document.getElementById('todoTitle').value;
  const sendData = await axios.post("/createTodo",{title});
  document.getElementById('todoTitle').value=null;
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

const CreateTaskModal = (id) => {
  // create todo in database
const createTask = async()=>{
  const task = document.getElementById('taskTitle').value;
  const sendData = await axios.put("/createTask/"+id,{task});
  document.getElementById('taskTitle').value=null;
}
// handle submit of form
  const handleSubmit = (event) =>{
    event.preventDefault();
    createTask();
  }

    const handleClick = () => {
        // 👇️ toggle class on click
        document.getElementById('createTaskModal').classList.toggle('hidden');
      };
    
    return(
        <>
<div className="modal fade rounded h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 shadow-lg shadow-gray-900 outline" id="createTaskModal" tabindex="-1" aria-labelledby="createTaskLabel">
  <div className="modal-dialog pointer-events-none relative w-auto">
    <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
      <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="createTaskLabel">Create Task</h5>
        <button type="button" className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" onClick={()=>{handleClick()}} >X</button>
      </div>
      <div className="modal-body relative p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input type="text" className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" name="task" id="taskTitle" placeholder="Name" />
          </div>
          <button type="submit" className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">CREATE NEW TASK</button>
        </form>
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
        <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg" onClick={()=>{handleClick()}}>Close</button>
      </div>
    </div>
  </div>
</div>

</>
    )
}

const UpdateTodoModal = (id) => {
  // create todo in database
const updateTodo = async()=>{
  const title = document.getElementById('todoTitle').value;
  const sendData = await axios.put("/updateTodo/"+id,{title});
  document.getElementById('todoTitle').value=null;
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

const UpdateTaskModal = (id) =>{
  // create todo in database
const updateTask = async()=>{
  const task = document.getElementById('taskTitle').value;
  const sendData = await axios.put("/updateTask/"+id,{task});
  document.getElementById('taskTitle').value=null;
}
// handle submit of form
  const handleSubmit = (event) =>{
    event.preventDefault();
    updateTask();
  }

    const handleClick = () => {
        // 👇️ toggle class on click
        document.getElementById('updateTaskModal').classList.toggle('hidden');
      };
    
    return(
        <>
<div className="modal fade rounded h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 shadow-lg shadow-gray-900 outline" id="updateTaskModal" tabindex="-1" aria-labelledby="updateTaskModalLabel">
  <div className="modal-dialog pointer-events-none relative w-auto">
    <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
      <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="updateTaskModalLabel">Update Task</h5>
        <button type="button" className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" onClick={()=>{handleClick()}} >X</button>
      </div>
      <div className="modal-body relative p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input type="text" className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" name="task" id="taskTitle" placeholder="Name" />
          </div>
          <button type="submit" className="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">UPDATE TASK</button>
        </form>
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
        <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg" onClick={()=>{handleClick()}}>Close</button>
      </div>
    </div>
  </div>
</div>

</>
    )
}


const DeleteTodo = (id) =>{
  const deleteTodo = async()=>{
    const sendData = await axios.delete("/deleteTodo/"+id);
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


const DeleteTask = (id) =>{
  const deleteTask = async()=>{
    const sendData = await axios.delete("/deleteTask/"+id);
  }
  deleteTask();
  
  const handleClick = () => {
    // 👇️ toggle class on click
    document.getElementById('deleteTask').classList.toggle('hidden');
  };

  return(<>
  <div className="fade h-98 fixed top-1/3 left-1/2 w-96 -translate-x-2/4 -translate-y-2/4 rounded shadow-lg shadow-gray-900 outline" id="deleteTask" tabindex="-1">
  <div className="w-auto">
    <div className="relative flex w-full flex-col rounded-md shadow-lg bg-white">
      <div className="flex rounded-t-md p-4">
        <h5 className="m-auto text-xl font-medium text-gray-800">Task Deleted Successfully</h5>
      </div>
      <div className="flex justify-center rounded-b-md border-t border-gray-200 p-2">
        <button type="button" className="rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-lg" onClick={()=>{handleClick()}}>Close</button>
      </div>
    </div>
  </div>
</div>
  </>)
}


export {CreateTodoModal, CreateTaskModal, UpdateTaskModal, UpdateTodoModal, DeleteTask, DeleteTodo};