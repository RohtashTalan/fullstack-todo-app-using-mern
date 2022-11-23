import React from "react";
import TodosList from "./Todos";

const TodosApp = () => {

    return(
    <div className="text-black bg-[#f0f2f5] divide-y-8">
        <div className="text-center text-3xl p-4  font-bold py-8">Full Stack Todos App</div>
        <div className="flex w-full h-screen bg-[#f0f2f5] divide-x-2">
            {/* // left side for Todos Listing */}
                    <TodosList />
        </div>
    </div>
)
}


export default TodosApp;