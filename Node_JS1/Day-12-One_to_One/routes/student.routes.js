const express = require("express");

const { studentModel } = require("../model/students.model");
const { idCard_model } = require("../model/id_card.model");

const studentRoutes = express.Router();

studentRoutes.get("/", async (req, res) => {
  const studentData = await studentModel.find();

  res.send(studentData);
});

studentRoutes.get("/:id", async (req, res) => {
  const studentData = await idCard_model
    .findOne({
      id_Card_No: req.params.id,
    })
    .populate("student_ID");

  console.log("🚀 ~ studentData:", studentData);

  res.send(studentData);
});

studentRoutes.post("/createStudent", async (req, res) => {
  const studentData = await studentModel.create(req.body);

  const idCard_generate = await idCard_model.create({
    student_ID: studentData._id,
  });

  studentData.idCard = idCard_generate.id_Card_No;

  await studentData.save();

  res.send({
    studentValue: studentData,
  });
});

module.exports = { studentRoutes };
