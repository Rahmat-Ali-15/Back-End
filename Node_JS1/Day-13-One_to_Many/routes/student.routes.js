const express = require("express");

const { studentModel } = require("../model/student.model");
const { trainerModel } = require("../model/trainer.model");
const studentRoutes = express.Router();

studentRoutes.get("/", async (req, res) => {
  const studentData = await studentModel.find().populate("trainer_ID");

  res.send(studentData);
});

studentRoutes.post("/createStudent", async (req, res) => {
  if (req.body) {
    const trainerData = await trainerModel.findOne({
      techStack: req.body.batch,
    });

    const studentData = await studentModel.create({
      ...req.body,
      trainer_ID: trainerData._id || "not defined",
    });

    res.send(studentData);
  }
});

module.exports = { studentRoutes };
