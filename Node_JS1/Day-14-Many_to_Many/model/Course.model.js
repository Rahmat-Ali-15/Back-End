const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    course: String,
  },
  {
    versionKey: false,
  },
);

const courseModel = mongoose.model("Course", courseSchema);

module.exports = { courseModel };
