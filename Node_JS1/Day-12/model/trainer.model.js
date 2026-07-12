const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema(
  {
    experience: Number,
    techStack: [String],
    designation: String,
    user_ID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    versionKey: false,
  },
);

const trainerModel = mongoose.model("Trainer", trainerSchema);

module.exports = { trainerModel };
