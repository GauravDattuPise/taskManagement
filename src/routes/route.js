const express = require('express');
const router = express.Router();

const {createUser, login} = require("../controllers/userController");
const { createTask } = require('../controllers/taskController');


router.post("/createUser", createUser);
router.post("/login", login)

router.post("/createTask", createTask);
module.exports = router