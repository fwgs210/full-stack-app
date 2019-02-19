const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { User, Comment, Chat } = require('./models/user')
const auth = require('./middleware/auth')
const verifyAdmin = require('./middleware/verifyAdmin')
const { sign } = require('./utils/tokenService')
const { client, mailTemplate } = require('./mail')

router.route('/retrieve-user-info').post((req, res) => {

    const { email } = req.body;

    User.findOne({ email })
        .then(doc => {

            if (doc) {
                const token = sign({ userInfo: doc });                

                client.sendEmail(mailTemplate({ toEmail: email, resetToken: token }), error => {
                    if (error) {
                        res.status(203).json({ message: 'There was an error sending the email' })
                    } else {
                        res.status(200).json({ message: 'Your password reset link is sent to your email.' })
                    }
                })

                /* Gmail way below */

                // transport.sendMail(mailTemplate({ toEmail: email, token }))

                // transport.verify(error => {
                //     if (error) {
                //         res.status(203).json({ message: 'There was an error sending the email' })
                //     } else {
                //         res.status(200).json({ message: 'Your password reset link is sent to your email.' })
                //     }
                // });
            } else {
                res.status(203).json({ message: 'Your email does not exist in our database.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })


});

router.route('/all-comments').get((req, res) => {
    Comment.find()
        .populate('userId')
        .exec()
        .then(docs => {
            res.status(200).json({ payload: docs })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.route('/user-comments').post(auth, (req, res) => {
    User
        .findOne({ _id: req.token.userInfo._id })
        .populate({
            path: 'comments',
            populate: { path: 'userId' }
        })
        .exec((err, foundUser) => {
            if (err) {
                res.status(500).json({ message: err.message })
                return handleError(err)
            }

            res.status(200).json({ payload: foundUser.comments, message: 'token verified.' })
        });
})

router.route('/addComment').post(auth, async (req, res) => {
    const { comment } = req.body
    const { _id } = req.token.userInfo
    const newComment = new Comment({
        userId: _id,
        description: comment
    })

    await newComment.save()
    await User.findByIdAndUpdate(_id, { $push: { comments: newComment } })

    Comment.populate(newComment, { path: "userId" }, (err, populatedNewCom) => {
        if (err) {
            res.status(500).json({ message: err.message })
            return null
        }
        res.status(201).json({ payload: populatedNewCom })
    })
})

// change password
router.route('/user/change-password').post(auth, (req, res) => {
    const { newPassword } = req.body;
    const { username, _id } = req.token.userInfo

    User.findOneAndUpdate({ _id, username }, { password: newPassword }, { new: true }) // set new true to get the updated content
        .then(doc => {
            console.log(doc)
            const token = sign({ userInfo: doc });
            res.status(200).json({ message: 'Password updated.', token })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

// new user
router.route('/newuser').post(async (req, res) => {
    const { username, password, email, profileImg } = req.body;

    const userExist = await User.findOne({ username })
    const emailExist = await User.findOne({ email })

    if (userExist) {
        res.status(203).json({ message: 'User already exists' })
    } else if (emailExist) {
        res.status(203).json({ message: 'Email already exists' })
    } else {
        const user = new User({ username, password, email, profileImg, _id: new mongoose.Types.ObjectId() })
        user
            .save()
            .then(doc => {
                // const newComment = new Comment({
                //     userId: user._id,
                //     userPosted: user.username,
                //     description: 'this is your first comment!',
                //     userProfileImg: user.profileImg
                // })
                // newComment.save() // save first comment
                // user.comments.push(newComment); // push new comment
                // user.save(); // save new comment

                const token = sign({ userInfo: doc });
                res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role }, token })
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
})

// SSO login 
router.route('/login/sso').post(auth, (req, res) => {
    const { username, password } = req.token.userInfo
    User.findOne({ username, password })
        .then(doc => {
            if (doc) {
                res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role, username: doc.username } })
            } else {
                res.status(203).json({ user: doc, message: 'Authentication failed' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

// login 
router.route('/login').post((req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(doc => {
            if (doc) {
                const token = sign({ userInfo: doc }); // user token structure
                res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role, username: doc.username }, token: token })
            } else {
                res.status(203).json({ message: 'Authentication failed' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.route('/user-comments/edit').put((req, res) => {
    const { id, description } = req.body;
    Comment.findByIdAndUpdate(id, { description })
        .then(doc => {
            res.status(200).json({ todo: doc })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.route('/user-comments/:id').delete((req, res) => {
    const { id } = req.params

    Comment.findByIdAndRemove(id)
        .then(doc => {
            res.status(200).json({ todo: doc })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

// admin API
router.route('/users').get(verifyAdmin, (req, res) => {
    User.find().select({ password: 0 })
        .then(doc => {
            if (doc) {
                res.status(200).json({ users: doc })
            } else {
                res.status(203).json({ message: 'No user found' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.route('/users/:userId')
    .put(verifyAdmin, (req, res) => {
        const { userId } = req.params;
        const { username, email, profileImg, role } = req.body

        User.findByIdAndUpdate(userId, { username, email, profileImg, role })
            .then(doc => {
                res.status(200).json({ message: `${username}'s profile updated by ${req.token.userInfo.username}` })
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })
    .delete(verifyAdmin, (req, res) => {
        const { userId } = req.params;

        User.findByIdAndRemove(userId)
            .then(doc => {
                res.status(200).json({ message: `${doc.username} is removed` })
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })

router.route('/newchat').post(auth, async (req, res) => {
    const { chat } = req.body
    const { _id } = req.token.userInfo
    const newChat = new Chat({
        userId: _id,
        description: chat,
        date: new Date(),
    })
    await newChat.save()
    await User.findByIdAndUpdate(_id, { $push: { chats: newChat } })
    Chat.populate(newChat, { path: "userId" }, (err, doc) => {
        if (err) {
            res.status(500).json({ message: err.message })
            return null
        }
        res.status(201).json({ payload: doc })
    })
})

router.route('/all-chats').get((req, res) => {
    Chat.find()
        .populate('userId')
        .exec()
        .then(docs => {
            res.status(200).json({ payload: docs })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router