const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: String,
    isEdits: Boolean,
    isComplete: Boolean,
  },
  {
    versioKey: false,
  },
);

const todoModel = mongoose.model("todo", todoSchema);

module.exports = { todoModel };
