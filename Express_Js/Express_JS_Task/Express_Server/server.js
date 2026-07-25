import express from "express";

const server = express();

const port = 8080;

server.get("/", (req, res) => {
  res.send({ message: "Welcome to my Express Server" });
});

server.get("/about", (req, res) => {
  res.send({
    name: "Rahmat",
    age: 21,
  });
});

server.get("/contact", (req, res) => {
  res.send({
    email: "example@gmail.com",
    phone: "9876543210",
  });
});


server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
