const express = require("express");

const studentRoutes = express.Router();

studentRoutes.get("/", (req, res) => {
  res.send("Students Home Page");
});

studentRoutes.get("/all_students", (req, res) => {
  let weather = {
    bengaluru: "summer",
    uae: "summer",
    usa: "spring",
  };
  let city = req.query.city;
  res.send(`city ${city} weather ${weather[city]}`);
});

studentRoutes.get("/only_boys/:id", (req, res) => {
  res.send(`Student roll number: ${req.params.id}`);
});

module.exports = { studentRoutes };
