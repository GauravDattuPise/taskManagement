const userModel = require("../models/userModel")
const taskModel = require("../models/taskModel")

const validation = require("../validations/validation")


exports.createTask = async function (req, res) {
    try {
        let data = req.body;

        let {title,description,status,prority, assigneeId, dueDate} = data;

        //body validation

        if (!title || !description || !assigneeId || !dueDate) {
            return res.status(400).send({ status: false, Error: "task's all data is mandatory" })
        }

        //find assigneeId validation
        const findUser = await userModel.findById(assigneeId)
        if (!findUser) {
            return res.status(404).send({ status: false, Error: "User not found" })
        }

        let createdTask = await taskModel.create(data)
        res.status(201).send({ status: true, msg: createdTask })
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}
