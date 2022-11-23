const Todo = require("../model/todoModel");

exports.home = async(req, res) => {
    res.send("Welcome on Todo list home page");
}

// create Todo in DataBase
exports.createTodo = async(req, res)=>{
    try{
        const {title} = req.body;

        //To Check All the details
        if(!title){
            throw new Error("title is required")
        }
        const titleExist = await Todo.findOne({title});

        if(titleExist){
            throw new Error("This TODO is  Already Exists")
        }

        // inserting into the database
        const todo = await Todo.create({title});
         
        // insert userinto db
        res.status(201).json({
            success:true,
            message: "Todo Created Successfully",
            todo,
        })

    } catch(err){}
}

// Create Tasks inside Todo Documents
exports.createTask = async(req, res) => {
    try {
        const todoId = req.params.id;
        const {task} = req.body;
        if(task){
        const tasks = await Todo.findByIdAndUpdate(todoId, {$addToSet : {"tasks" : {'task' :task}} });
        res.status(201).json({
            success:true,
            message:"task Created Successfully"
        });
    }
    else if(!task){
        res.status(401).json({
            success:false,
            message:"Enter Task"
        });
    }

    } catch (error) {
        
    }
}

// list Todos
exports.listTodos = async(req, res) => {
    const todosList = await Todo.find({},{title:1});
    res.status(201).json({todosList});
}

// list Tasks
exports.listTasks = async(req, res) => {
    const todoId = req.params.id;
    const tasks = await Todo.findById(todoId);
    res.status(201).json({tasks});
}


// Update Todo
exports.updateTodo = async(req, res) => {
    const todoId = req.params.id;
    const title = req.body;
    const todoUpdate = await Todo.findByIdAndUpdate(todoId, title);
    res.status(201).json({
        success:true,
        message:"Todo Updated Successfully"
    })
}

// Update Task
exports.updateTask =  async(req, res) => {
    const id = req.params.id;
    // split id to findandUpdate
    const todoId=id.split("_")[0];
    const taskId=id.split("_")[1];

    // capture task value
    const task = req.body.task;
    
    const updateTask = await Todo.findOneAndUpdate({_id:todoId, "tasks._id":taskId}, { $set: { "tasks.$.task":task}});


    res.status(201).json({
        success:true,
        message:"Task Updated Successfully"
    })
}

// Delete Todo
exports.deleteTodo = async(req, res) => {
    const todoId = req.params.id;
    const todoUpdate = await Todo.findByIdAndDelete(todoId);
    res.status(201).json({
        success:true,
        message:"Todo Updated Successfully"
    })
}

// Delete Task
exports.deleteTask =  async(req, res) => {
    const id = req.params.id;
    // split id to find and delete
    const todoId=id.split("_")[0];
    const taskId=id.split("_")[1];

    
    const updateTask = await Todo.findOneAndUpdate({_id:todoId, "tasks._id":taskId}, { $unset :{"tasks.$":taskId} });


    res.status(201).json({
        success:true,
        message:"Task Deleted Successfully"
    })
}

// task Completed
exports.completedTask = async(req, res) => {
    const id = req.params.id;
    // split id to findandUpdate
    const todoId=id.split("_")[0];
    const taskId=id.split("_")[1];

    // capture task value
    const task = req.body.task;
    
    const updateTask = await Todo.findOneAndUpdate({_id:todoId, "tasks._id":taskId}, { $set: { "tasks.$.taskCompleted":true}});


    res.status(201).json({
        success:true,
        message:"Congratulation For Complete Your Task"
    })
}