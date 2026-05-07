const express = require("express");
require("dotenv").config();

const cors = require("cors");

//# route import
const { authModel } = require("./model/auth.model");
const { Connection } = require("./config/db.js");

const app = express();

//# Middleware
app.use(express.json(), express.text(), cors());

//# signup
app.post("/signup", async (req, res) => {
  // console.log("🚀 ~ req:", req.body);

  //# logic where  my date is there or not
  if (req.body === undefined || (!req.body.email && !req.body.password)) {
    res.status(404).send({ msg: "not found" });
  } else {
    const authDataSave = new authModel(req.body);
    await authDataSave.save();
    res.status(201).json({ msg: "create user in DB", data: authDataSave });
  }
});

//# Login
app.post("/login", async (req, res) => {
  if (req.body === undefined || (!req.body.email && !req.body.password)) {
    res.status(404).send({ msg: "not found" });
  }

  console.log("🚀 ~ req.body.email:", req.body.email);

  //$ user get data
  const dataOfUser = await authModel.find({ email: req.body.email });

  if (dataOfUser.length > 0) {
    if (
      dataOfUser[0].email === req.body.email &&
      dataOfUser[0].password === req.body.password
    ) {
      res.send("Password Correct ✅");
    } else {
      res.send("Password Incorrect ❌");
    }
  } else {
    res.send("Please sign-in first, your data is not present in DB");
  }
});

//# routes

//# server start
app.listen(process.env.Port, async () => {
  try {
    await Connection;
    console.log("DB Connected ✅");
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("DB not Connected ✅");
  } finally {
    console.log(`port is running on ${process.env.Port}`);
  }
});
