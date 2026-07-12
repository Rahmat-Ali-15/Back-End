const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    number: Number,
    age: Number,
    married: Boolean,
    organization: String,
    hobbies: Object,
  },
  {
    versionKey: false,
  },
);

const userModel = mongoose.model("todo", userSchema);

module.exports = { userModel };
