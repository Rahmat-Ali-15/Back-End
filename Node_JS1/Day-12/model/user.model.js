const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    dob: Number,
    gender: String,
    contact: Number,
    email: String,
    address: String,
    role: {
        type: String,
        emum: ['student', 'trainer']
    }
  },
  {
    versionKey: false,
  },
);

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
