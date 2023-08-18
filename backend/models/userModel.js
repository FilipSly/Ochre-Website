const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, "Username cannot be blank!"],
        unique: true
    },
    email: {
        type: String,
        require: [true, "Email cannot be blank!"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Password cannot be blank!"]
    }
}, { timestamps: true })

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema)

