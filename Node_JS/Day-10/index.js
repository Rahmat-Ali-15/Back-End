const express = require("express");
require("dotenv").config();

const { Connection, userModel } = require("./db");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// Read
app.get("/user", async (req, res) => {
  const userData = await userModel.find();
  res.send(userData);
});

// Creat (Here i have to change the code & create the data)
app.get("/userCreate", async (req, res) => {
  const userData = await userModel.find();
  res.send(userData);
});

app.listen(PORT, async () => {
  try {
    await Connection;
    console.log("DB is Connected");
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("DB is Disconnected");
  } finally {
    console.log(`Server is running on ${PORT}`);
  }
});
