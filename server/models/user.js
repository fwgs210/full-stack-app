const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImg: { type: String, required: false },
    role: { type: String, required: false, default: 'member' }
})

const User = mongoose.model('User', userSchema)

module.exports = User
