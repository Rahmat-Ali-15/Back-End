const express = require("express");
const fs = require("fs");

const PORT = 7080;

// server creation
const server = express();

// clg -> a c home d b

// first middleware

server.use((req, res, next) => {
  console.log("a");
  next();
  console.log("b");
});

// second middleware

server.use((req, res, next) => {
  console.log("c");
  next();
  console.log("d");
});

server.get("/", (req, res) => {
  console.log("🚀 ~ home:", home);
  res.send("home");
});

server.get("/notes", (req, res) => {
  const fsData = fs.readFileSync("../Day-6/data.json", "utf-8");
  console.log("🚀 ~ fsData:", fsData);
  console.log("e");

  res.send(fsData);

//   fs.readFile("../Day-6/data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(data);
//     console.log("🚀 ~ data:", data);
//     console.log("e");
//   });
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
