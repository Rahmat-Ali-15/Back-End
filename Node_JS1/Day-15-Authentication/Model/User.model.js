const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    dob: String,
    genger: String,
    contact: Number,
    email: String,
    address: String,
    role: {
      type: String,
      enum: ["student", "trainer"],
    },
    password: String,
  },
  {
    versionKey: false,
  },
);

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
