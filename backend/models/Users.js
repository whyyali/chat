const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
})

const Users = mongoose.model('User', userScheme);

module.exports = Users;