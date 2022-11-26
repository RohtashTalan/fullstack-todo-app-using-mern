import React from "react";
import TasksList from "./TasksList";
import TodosList from "./TodosList";



const TodosApp = () => {

return(<>
<div className="bg-gray-200 h-screen">
        {/* Header  */}
        <header className="h-16">
            <nav className="bg-gray-900 text-white p-4">
                <div className="flex justify-between text-3xl">
                <div>Logo</div>
                <div>user</div>
                </div>
            </nav>
        </header>

       {/* main conatiner  */}
        <main className="h-5/6 bg-gray-300">
            <div className="w-full flex px-2 py-8 h-full divide-x-2">

                {/* *** TODOS LIST LEFT SIDE*** */}
                <aside className="w-1/5 h-full bg-gray-300">
                    <TodosList />
                </aside>
                
                {/* *** TASKS LIST RIGHT SIDE*** */}
                <div className="w-4/5 h-full px-3">
               <TasksList />
                </div>
            </div>
        </main>

        {/* Footer  */}
        <footer className="bg-gray-900 p-4 w-full h-16">
            <div>

            </div>
        </footer>


 </div>

    </>)
}


export default TodosApp;