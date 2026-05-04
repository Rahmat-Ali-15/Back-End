const mongoose = require('mongoose');
require('dotenv').config()

const Connection = mongoose.connect(process.env.MongoDB_URL)

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        married: Boolean
    },
    {
        versionKey: false
    }
);

const userModel = new mongoose.model('user', userSchema);

module.exports = {Connection, userModel}