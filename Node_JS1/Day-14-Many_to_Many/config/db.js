const mongoose = require('mongoose');

const Connection = mongoose.connect(process.env.mongo_DB);

module.exports = {Connection}