const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const todoSchema = new Schema({
//     description: { type: String, required: true },
//     completed: { type: Boolean, default: false }
// })

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const User = mongoose.model('User', userSchema)

module.exports = User
