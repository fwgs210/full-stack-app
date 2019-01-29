const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  userId: { type: String, required: true },
  userProfileImg: { type: String, required: false },
  userPosted: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
