const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImg: { type: String, required: false },
    role: { type: String, required: false, default: 'member' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }]
})

const commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true }
})

const chatSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: String, required: true },
    description: { type: String, required: true }
})

const Chat = mongoose.model('Chat', chatSchema)
const Comment = mongoose.model('Comment', commentSchema)
const User = mongoose.model('User', userSchema)

module.exports.User = User
module.exports.Comment = Comment
module.exports.Chat = Chat