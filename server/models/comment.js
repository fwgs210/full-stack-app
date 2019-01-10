const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  userId: { type: String, required: true },
  userPosted: { type: String, required: true },
  description: { type: String, required: true }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
