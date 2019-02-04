/* eslint-disable */
import App from './views/App';
import React from 'react';
import nodemailer from 'nodemailer'
import express from 'express';
import bodyParser from 'body-parser'
import auth from './server/middleware/auth'
import verifyAdmin from './server/middleware/verifyAdmin'
import token, { sign } from './server/utils/tokenService'
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { User, Comment, Chat } from './server/models/user'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const app = express()
const router = express.Router();

const mailConnectionAuth = {
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "tracywebconsultant@gmail.com",
    clientId: token.clientId,
    clientSecret: token.clientSecret,
    refreshToken: token.refreshToken,
    accessToken: token.accessToken
  }
};

app
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/api', router);

router.route('/retrieve-user-info').post((req, res) => {

  const { email } = req.body;

  User.findOne({ email })
    .then(doc => {
      if (doc) {
        async function setupMailer() {
          // create reusable transporter object using the default SMTP transport
          const transporter = await nodemailer.createTransport(mailConnectionAuth);

          // setup email data with unicode symbols
          const mailOptions = {
            from: '"Password Recovery" <donotreply@tracy-su-full-stack-app.com>', // sender address
            to: email, // list of receivers
            subject: "User Information", // Subject line
            generateTextFromHTML: true,
            html: `<h1>Here are your login info</h1>
            <p>Username: ${doc.username}</p>
            <p>Password: ${doc.password}</p>
            ` // html body
          };

          // send mail with defined transport object
          await transporter.sendMail(mailOptions)

          // verify connection configuration
          transporter.verify(error => {
            if (error) {
              res.status(203).json({ message: 'There was an error sending the email' })
            } else {
              res.status(200).json({ message: 'Your username and password are sent to your email.' })
            }
          });
        }

        setupMailer().catch(console.error);

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

router.route('/addComment').post(auth, (req, res) => {
  const { comment } = req.body
  const { _id } = req.token.userInfo
  const newComment = new Comment({
    userId: _id,
    description: comment
  })

  newComment
    .save()
    .then(async doc => {
      await User.findByIdAndUpdate(_id, { $push: { comments: newComment } })
      res.status(201).json({ payload: doc })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

// change password
router.route('/user/change-password').post(auth, (req, res) => {
  const { userId, oldPassword, newPassword } = req.body;
  const { username } = req.token.userInfo

  User.findOneAndUpdate({ _id: userId, username, password: oldPassword }, { password: newPassword })
    .then(doc => {
      res.status(200).json({ message: 'Password updated' })
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
        const newComment = new Comment({
          userId: user._id,
          userPosted: user.username,
          description: 'this is your first comment!',
          userProfileImg: user.profileImg
        })
        newComment.save() // save first comment
        user.comments.push(newComment); // push new comment
        user.save(); // save new comment

        const token = sign({ userInfo: doc });
        res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role }, token: token })
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

// server side rendering react
app.get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Full Stack App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="http://www.tracysu.com/wp-content/uploads/2015/01/faviconapple.png">
        <style>
        * {
          box-sizing: border-box;
        } 
        </style>
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body style="margin:0;background-color:#f2f2f2;">
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

export default app;
