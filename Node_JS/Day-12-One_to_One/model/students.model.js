const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: String,
    batch: Number,
    time: String,
    achivements: [String],
    role: {
      type: String,
      enum: ["student", "trainer", "admin"],
    },
    student_id_card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "IdCard",
    },
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = { studentModel };
