const express = require("express");

const { courseModel } = require("../model/Course.model");

const courseRoutes = express.Router();

courseRoutes.get("/", async (req, res) => {
  const courseData = await courseModel.find();

  res.send(courseData);
});

courseRoutes.post("/createCourse", async (req, res) => {
  const courseData = await courseModel.create(req.body);

  res.send(courseData);
});

module.exports = { courseRoutes };
