const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: String,
    batch: String,
    time: Number,
    achivements: [String],
    role: {
      type: String,
      enum: ["student", "trainer", "admin"],
    },
    course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = { studentModel };
