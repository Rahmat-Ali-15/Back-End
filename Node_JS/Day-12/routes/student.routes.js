const express = require("express");

const studentRoutes = express.Router();
const { studentModel } = require("../model/student.model");
const { userModel } = require("../model/user.model");

// path = "/student/"
// read
studentRoutes.get("/", async (req, res) => {
  const studentData = await studentModel.find();
  res.send({ msg: "data found", data: studentData });
});

// path = "/student/createstudent"
// create
studentRoutes.post("/createstudent", async (req, res) => {
  console.log("🚀 ~ req.body:", req.body);
  if (req.body) {
    const userData = await new userModel.create(req.body);
    console.log("🚀 ~ userData:", userData);
    const studentData = new studentModel({
      batch: req.body.batch,
      achivements: req.body.achivements,
      user_ID: userData._id,
    });
    await studentData.save();
    res.send({ msg: "data created", data: studentData });
  }
});

// path="/student/updatestudent"
// update
studentRoutes.patch("/updatestudent", async (req, res) => {});

// path="/student/deletestudent"
// delete
studentRoutes.get("/deletestudent", (req, res) => {});

module.exports = { studentRoutes };
