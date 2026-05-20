const mongoose = require("mongoose");
require("dotenv").config();

const Connected = mongoose.connect(process.env.mongoDB);

module.exports = { Connected };
