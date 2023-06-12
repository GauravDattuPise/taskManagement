// Task CRUD Operations: Create APIs to perform CRUD operations on tasks. Users should be able to create new tasks, retrieve a list of tasks, update existing tasks, and delete tasks.
// Task Filtering and Sorting: Implement endpoints to filter and sort tasks based on various criteria, such as task status, priority, due date, or assignee.

const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const taskSchema = new mongoose.Schema({

    
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true,default : "pending", enum: ["pending", "inProgress", "completed"] },
    prority: { type: String, required: true,default : "medium", enum: ["high", "medium", "low"] },
    assigneeId: { type: ObjectId, ref: "user" },
    dueDate: { type: Date, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model('task', taskSchema)