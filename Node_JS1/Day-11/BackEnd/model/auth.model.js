const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    versionKey: false,
  },
);

const authModel = mongoose.model("auth", authSchema);

module.exports = { authModel };
