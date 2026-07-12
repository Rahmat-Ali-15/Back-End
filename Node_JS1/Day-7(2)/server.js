const express = require("express");

const app = express();

const { studentRoutes } = require("./routes/Student.route");

app.use(express.json());

//# eg: 1

// app.use((req, res, next) => {
//   if (3 + 5 == 6) {
//     res.send("Bye");
//   } else {
//     console.log("a");
//     next();
//     console.log("b");
//   }
// });

// app.use((req, res, next) => {
//   let flag = false;
//   if (flag) {
//     res.send("Bye");
//   } else {
//     console.log("c");
//     next();
//     console.log("d");
//   }
// });

//# eg: 2

let Auth = (req, res, next) => {
  if (req.body.auth) {
    next();
  } else {
    res.send("Your are not authorized");
  }
};

let logger = (req, res, next) => {
  let startTime = Date.now();
//   console.log("🚀 ~ startTime:", startTime);

  next();
  let endTime = Date.now();
//   console.log("🚀 ~ endTime:", endTime);

//   console.log(endTime - startTime);
};

app.get("/", (req, res) => {
//   console.log("e");
//   console.log("🚀 ~ req.body:", req.body);
  res.send("home");
});

app.use(Auth, logger);
app.use("/std", studentRoutes);

app.listen(7000, () => {
  console.log("Port is running on 7000");
});
