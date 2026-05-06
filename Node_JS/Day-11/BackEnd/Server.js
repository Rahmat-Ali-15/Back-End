const express = require("express");
require("dotenv").config();

const cors = require("cors")

//# route import
const { authModel } = require("./model/auth.model");
const { Connection } = require("./config/db.js");

const app = express();

//# Middleware
app.use(express.json(), express.text(), cors());

//# signup
app.post("/signup", async (req, res) => {
  console.log("🚀 ~ req:", req.body);

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


//# routes


//# server start
app.listen(process.env.Port, async () => {
    try {
        await Connection;
        console.log('DB Connected ✅');
    } catch (error) {
        console.log("🚀 ~ error:", error);
        console.log('DB not Connected ✅')
    }finally{
        console.log(`port is running on ${process.env.Port}`)
    }
}) 