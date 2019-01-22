const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const http = require('http');
const enforce = require('express-sslify');
const cors = require('cors')

const Comment = require('./models/comment')
const User = require('./models/user')
const token = require('./config/emailToken')
const auth = require('./middleware/auth')
const verifyAdmin = require('./middleware/verifyAdmin')
const { uri, PORT } = require('./config/serverSetup')
const { sign } = require('./utils/tokenService')
const initAdminUser = require('./utils/initAdminUser')

mongoose.connect(uri, { useNewUrlParser: true })
const app = express()
const router = express.Router();
const env = app.get('env');

// mailer
const nodemailer = require("nodemailer");

// const { google } = require('googleapis');
// const mailConnectionAuth = {
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: 'tracywebconsultant@gmail.com', // generated ethereal user
//     pass: '87532998' // generated ethereal password
//   }
// }

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

if (env === 'production') { // PROD setup
  initAdminUser()

  app.use(express.static(path.join(__dirname, '../build')));
  app.use(enforce.HTTPS({ trustProtoHeader: true })) // set trustProtoHeader TRUE for heroku

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // allow self assigned SSL

  http.createServer(app).listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
  });

}

if (env === 'development') { // DEV setup
  http.createServer(app).listen(PORT, function () {
    console.log(`Server listening on port ${PORT}.`)
    console.log(env)
  });
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// allow CORS
// app.use(cors())

app.use('/api', router);

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
    .then(docs => {
      res.status(200).json({ payload: docs })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

router.route('/user-comments').post(auth, (req, res) => {
  Comment.find({ userId: req.token.userInfo._id })
    .then(docs => {
      res.status(200).json({ todos: docs, message: 'token verified.' })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

router.route('/addComment').post(auth, (req, res) => {
  const { todo, userId } = req.body
  const { username, profileImg } = req.token.userInfo
  const newComment = new Comment({
    userId,
    userPosted: username,
    description: todo,
    userProfileImg: profileImg ? profileImg : ''
  })
  newComment
    .save()
    .then(doc => {
      res.status(201).json({ comment: doc })
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

  const userExist = await User.findOne({ username, email })

  if (!userExist) {
    const user = new User({ username, password, email, profileImg })
    user
      .save()
      .then(doc => {
        const token = sign({ userInfo: doc });
        res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role }, token: token })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  } else {
    res.status(203).json({ message: 'User already exist' })
  }
})

// SSO login 
router.route('/login/sso').post(auth, (req, res) => {
  const { username, password } = req.token.userInfo
  User.findOne({ username, password })
    .then(doc => {
      if (doc) {
        res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role } })
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
        res.status(200).json({ user: { _id: doc._id, profileImg: doc.profileImg, role: doc.role }, token: token })
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
