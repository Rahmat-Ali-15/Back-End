const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { Connection, userModel } = require("./db");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
)


//# C R U D


//# Creat(Single Data)
/* app.post("/userCreate", async (req, res) => {
  try {
    const userData = await userModel.insertOne({
      name: "Rahmat",
      age: 21,
      married: false,
    });

    res.send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
}); */

//# Create(Multiple Data)
/* app.post("/userCreate", async (req, res) => {
  try {
    const userData = await userModel.insertMany([
      {
        name: "Rahmat",
        age: 21,
        married: false,
      },
      {
        name: "Arnav",
        age: 21,
        married: false
      },
      {
        name: "Gullu",
        age: 22,
        married: true
      }
    ]);

    res.send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
}) */ 


//# Create => Using create method
app.post("/userCreate", async (req, res) => {
  try {
    const userData = await userModel.create([
      {
        name: "Rahmat",
        age: 21,
        married: false,
      },
      {
        name: "Arnav",
        age: 21,
        married: false,
      },
      {
        name: "Sufyan",
        age: 21,
        married: false,
      },
      {
        name: "Khushiya",
        age: 12,
        married: true
      }
    ]);

    res.send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


//# Read
app.get("/userRead", async (req, res) => {
  const userData = await userModel.find();
  res.send(userData);
});


//# Update(Single data)
app.patch("/userUpdate", async (req, res) => {
  try {
    const userData = await userModel.updateOne(
      {
        _id: "69f9b98a67aeb7f5551e106c",
      },
      { name: "Md Rahmat" },
    );

    res.send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


//# Delete(Single Data)
app.delete("/userDelete", async (req, res) => {
  try {
    const userData = await userModel.deleteOne({_id: "69f9d12c378dd65a95091a67"});
    res.send(userData)
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(500).send(err.message);
  }
})

//# Delete(Multiple Data)
/* app.delete("/userDelete", async (req, res) => {
  try {
    const userData = await userModel.deleteMany({_id: {$in: ["69f9cf5aee0c21e26f488afd","69f9d00f51fae832009786ab", "69f9d12c378dd65a95091a68"]}});
    res.send(userData)
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(500).send(err.message);
  }
}) */



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
