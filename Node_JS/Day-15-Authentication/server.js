const express = require("express");
require("dotenv").config();

const { Connected } = require("./config/db");
const { userRoutes } = require("./routes/User.route");
const { userModel } = require("./Model/User.model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("home");
});

server.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    // User available
    const userFind = await userModel.findOne({ email: email });

    if (userFind) {
      res.send("Please login, You already exists");
    } else {
      const userCreate = await userModel.create(req.body);
      res.send({ msg: "data created", userData: userCreate });
    }
    res.send("signup");
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
});

server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // user available
    const userFind_1 = await userModel.find({ email: email });
    console.log("🚀 ~ userFind_1:", userFind_1);

    if (userFind_1.length > 0) {
      // res.send('please login, you already exists')
      if (
        userFind_1[0].email === email &&
        userFind_1[0].password === password
      ) {
        res.send("logged in");
      } else {
        res.send("login failed");
      }
    } else {
      res.send("Please signup first, you are not present in DB");
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
});

server.use("/user", userRoutes);

server.listen(process.env.Port, async () => {
  try {
    await Connected;
    console.log("Connected DB ✅");
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("Failed to Connected DB ❌");
  } finally {
    console.log(`Server is running on ${process.env.Port}`);
  }
});
