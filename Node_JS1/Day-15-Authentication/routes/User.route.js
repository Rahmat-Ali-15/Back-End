const express = require("express");

const { userModel } = require("../Model/User.model");

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  const data = await userModel.find();
  res.send();
});

module.exports = { userRoutes };
