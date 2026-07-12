const express = require("express");

const todoRoutes = express.Router();
const { todoModel } = require("../model/todo.model");

//! path="/todo"
//# read
todoRoutes.get("/", async (req, res) => {
  const todoData = await todoModel.find();
  res.send({ msg: "data found", data: todoData });
});

//! path = "/todo/createTodo"
//# create
todoRoutes.post("/createTodo", async (req, res) => {
  if (req.body) {
    const todoData = new todoModel(req.body);
    await todoData.save();
    res.send({ msg: "data created", data: todoData });
  }
});

//! path = "/todo/updateTodo"
//# update
todoRoutes.patch("/updateTodo", (req, res) => {});

//! path = "/todo/deleteTodo"
//# update
todoRoutes.patch("/deleteTodo", (req, res) => {});

module.exports = { todoRoutes };
