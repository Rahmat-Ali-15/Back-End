const express = require("express");

require("dotenv").config();

const { studentRoutes } = require("./routes/student.routes");
const {Connection} = require('./config/db');

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/student", studentRoutes);

app.listen(process.env.Port, async () => {
  try {
    await Connection
    console.log('Connected DB ✅')
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log('Failed to Connected DB ❌')
  }
  finally{
    console.log(`Server is running on ${process.env.Port}`);
  }
});
