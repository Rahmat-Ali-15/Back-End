const express = require("express");

const trainerRoutes = express.Router();
const { trainerModel } = require("../model/trainer.model");

// path="/trainer/"
// read
trainerRoutes.get("/", async (req, res) => {
  const trainerData = await trainerModel.find();
  res.send({ msg: "data found", data: trainerData });
});

// path="/trainer/createTrainer"
// create
trainerRoutes.post("/createTrainer", async (req, res) => {
  if (req.body) {
    const trainerData = await trainerModel.create(req.body);
    res.send({ msg: "data created", data: trainerData });
  }
});

// path="/trainer/updateTrainer"
// Update
trainerRoutes.patch("updateTrainer", (req, res) => {});

// path="/trainer/deleteTrainer"
// delete
trainerRoutes.delete("/deleteTrainer", (req, res) => {});

module.exports = { trainerRoutes };
