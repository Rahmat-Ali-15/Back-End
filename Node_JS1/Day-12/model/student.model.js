const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    user_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    trainer_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer"
    },
    batch: String,
    achivments: [String],
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = { studentModel };
