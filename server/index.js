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
const mailer = require('express-mailer');

mailer.extend(app, {
  from: 'no-reply@tracysu.fullstackapp.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'tracysu1990@gmail.com',
    pass: '87532998'
  }
});

app.set('views', __dirname + '/mailer');
app.set('view engine', 'jade');

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

app.post('/retrieve-user-info', function (req, res, next) {

  const { email } = req.body;

  app.mailer.send('email', {
    to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
    subject: 'User information', // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  }, (err) => {
    if (err) {
      // handle error
      console.log(err);
      res.status(500).json({ message: 'There was an error sending the email' })
    } else {
      res.status(200).json({ todos: docs, message: 'Your username and password are sent to your email.' })
    }
  });
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
        res.status(203).json({ user: doc, message: 'Authentication failed' })
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

// app.put('/todos/:index/:nextTodo', (req, res) => {
//   const { index, nextTodo } = req.params
//   let todo = todos[index]

//   if (todo) {
//     todos[index] = nextTodo
//     res.status(200).json({ todo: todos[index] })
//   } else {
//     res.status(404).json({
//       message: 'The todo does not exist.'
//     })
//   }
// })

// app.patch('/todos/complete/:id', (req, res) => {
//   const { id } = req.params

//   Comment.findByIdAndUpdate(id, { completed: true })
//     .then(doc => {
//       res.status(200).json({ todo: doc })
//     })
//     .catch(err => {
//       res.status(500).json({ message: err })
//     })
// })

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
