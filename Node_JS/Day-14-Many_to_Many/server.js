const express = require("express");
require("dotenv").config();

const { Connection } = require("./config/db");
const { studentRoutes } = require("./routes/student.routes");
const { courseRoutes } = require("./routes/course.routes");

const app = express();

app.use(express.json());

app.use("/student", studentRoutes);
app.use("/course", courseRoutes);

app.listen(process.env.Port, async () => {
  try {
    await Connection;
    console.log(`DB is Connedted ✅`);
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log(`Something went Wrong ❌`);
  } finally {
    console.log(`Port is running on ${process.env.Port}`);
  }
});
