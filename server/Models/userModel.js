const mongoose = require("mongoose");
const User = mongoose.model("MUser", mongoose.Schema({
    name: String,
    email: String,
    password: String,
}))

module.exports = User;