import express from "express";

const app = express();

const PORT = 4010;

app.use(express.json())

const data = [];

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  // validation - 1 => Checking name is exit or not
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Name is required",
    });
  }

  // Validation - 2 => Checking if age is exist
  if (age === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Age is reuired",
    });
  }

  // Validation - 3 => Checking age is a number or not
  if (typeof age !== "number") {
    return res.status(400).json({
      success: false,
      msg: "Age must be a number",
    });
  }

  // Validation - 4 => Checking age is a positive number or not
  if (age <= 0) {
    return res.status(400).json({
      success: false,
      msg: "Age must be a positive number",
    });
  }

  data.push({ name, age });

  res.status(201).json({
    success: true,
    msg: "Data is added",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    success: true,
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
