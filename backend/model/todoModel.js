const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Title for Todo required"],
        trim:true,
        maxlength:[30, "Title must be with in 30 Charcters"],
        unique:[true, "Entered Title Already Exists"]
        },
    tasks:[{
        task:{type:String, trim:true, require:[true, "Title for Task required"]},
        taskCompleted:{type:Boolean, default:false},
        createdAt:{type:Date, default:Date()},
        updatedAt:{type:Date, default:Date()}
         }
        ]
    
},
{ timestamps: true }
);


module.exports = mongoose.model("Todo", todoSchema);