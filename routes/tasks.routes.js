const route = require("express").Router();
const service = require("../services/tasks.service");

route.get("/",service.findTasks);

module.exports = route;

