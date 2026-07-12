const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema(
  {
    name: String,
    experience: Number || String,
    techStack: [String],
    designation: String,
  },
  {
    versionKey: false,
  },
);

const trainerModel = mongoose.model("Trainer", trainerSchema);

module.exports = { trainerModel };
