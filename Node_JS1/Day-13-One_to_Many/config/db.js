const mongoose = require('mongoose')
require('dotenv').config()

const Connected = mongoose.connect(process.env.Mongo_DB);

module.exports = { Connected };
