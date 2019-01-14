const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path');

const Comment = require('./models/comment')
const User = require('./models/user')
const { uri, PORT, key } = require('./config/serverSetup')

mongoose.connect(uri, { useNewUrlParser: true })
const app = express()
const env = app.get('env');

// mailer
const nodemailer = require("nodemailer");

const mailConnectionAuth = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'tracywebconsultant@gmail.com', // generated ethereal user
    pass: '87532998' // generated ethereal password
  }
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

if (env === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.post('/retrieve-user-info', (req, res) => {

  const { email } = req.body;

  User.findOne({ email })
    .then(doc => {
      if (doc) {
        async function setupMailer() {
          // create reusable transporter object using the default SMTP transport
          const transporter = nodemailer.createTransport(mailConnectionAuth);

          // setup email data with unicode symbols
          const mailOptions = {
            from: '"Password Recovery" <donotreply@tracy-su-full-stack-app.com>', // sender address
            to: email, // list of receivers
            subject: "User Information", // Subject line
            text: `Here are your login info
            Username: ${doc.username}
            Password: ${doc.password}
            `, // plain text body
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

app.get('/all-comments', (req, res) => {
      Comment.find()
        .then(docs => {
          res.status(200).json({ payload: docs })
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })
})

app.post('/user-comments', verifyToken, (req, res) => {

  jwt.verify(req.token, key, (err, decodedData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      Comment.find({ userId: req.body.userId})
        .then(docs => {
          res.status(200).json({ todos: docs, message: 'token verified.' })
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })
    }

  });
})

app.post('/addComment', verifyToken, (req, res) => {
  jwt.verify(req.token, key, (err, decodedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const { todo, userId } = req.body
      const { username } = decodedData.userInfo
      const newComment = new Comment({
        userId,
        userPosted: username,
        description: todo
      })
      newComment
        .save()
        .then(doc => {
          res.status(201).json({ todo: doc })
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })

      Comment.find({ userId: req.body.userId })
        .then(docs => {
          res.status(200).json({ todos: docs, message: 'token verified.' })
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })
    }
  });
})

// new user
app.post('/newuser', async (req, res) => {
  const { username, password, email } = req.body;

  const userExist = await User.findOne({ username, email })

  if (!userExist) {
    const user = new User({ username, password, email })
    user
      .save()
      .then(doc => {
        const token = jwt.sign({ userInfo: doc }, key);
        res.status(200).json({ user: { _id: doc._id }, token: token })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  } else {
    res.status(203).json({ message: 'User already exist' })
  }
})

// SSO login 
app.post('/login/sso', verifyToken, (req, res) => {
  jwt.verify(req.token, key, (err, decodedData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const { username, password } = decodedData.userInfo
      User.findOne({ username, password })
        .then(doc => {
          if (doc) {
            res.status(200).json({ user: { _id: doc._id } })
          } else {
            res.status(203).json({ user: doc, message: 'Authentication failed' })
          }
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })
    }
  });
})

// login 
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password })
    .then(doc => {
      if(doc) {
        const token = jwt.sign({ userInfo: doc }, key ); // user token structure
        res.status(200).json({ user: { _id: doc._id }, token: token })
      } else {
        res.status(203).json({ message: 'Authentication failed' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

app.put('/user-comments/edit', (req, res) => {
  const { id, description } = req.body;
  Comment.findByIdAndUpdate(id, { description })
    .then(doc => {
      res.status(200).json({ todo: doc })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

app.delete('/user-comments/:id', (req, res) => {
  const { id } = req.params

  Comment.findByIdAndRemove(id)
    .then(doc => {
      res.status(200).json({ todo: doc })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
  console.log(env)
})
