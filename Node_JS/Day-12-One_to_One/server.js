const express = require("express");
require("dotenv").config();

const { Connected } = require("./config/db");
const { studentRoutes } = require("./routes/student.routes");

const app = express();

app.use(express.json());

app.use("/student", studentRoutes);

app.listen(process.env.Port, async () => {
  try {
    await Connected;
    console.log(`DB is Connected ✅`);
  } catch (error) {
    console.log(`Something went wrong ❌`);
  } finally {
    console.log(`Port is running on ${process.env.Port}`);
  }
});
