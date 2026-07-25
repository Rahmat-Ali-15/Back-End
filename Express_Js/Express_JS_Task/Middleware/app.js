import express from "express";

const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  console.log("Request received");
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route
app.get("/students", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Students fetched successfully"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});