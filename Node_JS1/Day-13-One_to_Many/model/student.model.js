const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: String,
    batch: String,
    time: String,
    achivements: [String],
    trainer_ID: {
      type: mongoose.Schema.Types.ObjectId || String,
      ref: "Trainer",
    },
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = { studentModel };
