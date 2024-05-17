const express = require('express')
const routes = express.Router();
const TaskController = require('../controllers/TaskController')

routes.post('/create', [], TaskController.create)
routes.put('/update', [], TaskController.update)
routes.delete('/remove', [], TaskController.remove)

module.exports = routes