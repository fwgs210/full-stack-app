const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path');

const Todo = require('./models/todo')
const User = require('./models/user')

const PORT = process.env.PORT || 3001
const key = "tracy su"
const uri = process.env.MONGODB_URI || 'mongodb://localhost/todoApp'


mongoose.connect(uri, { useNewUrlParser: true })
const app = express()
const env = app.get('env');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../build')));

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

app.post('/todos', verifyToken, (req, res) => {

  jwt.verify(req.token, key, (err, decodedData) => {

    if(err) {
      res.sendStatus(403);
    } else {
      Todo.find({ userId: req.body.userId})
        .then(docs => {
          res.status(200).json({ todos: docs, message: 'token verified.' })
        })
        .catch(err => {
          res.status(500).json({ message: err.message })
        })
    }

  });
})

app.post('/addTodo', (req, res) => {
  const { todo, userId } = req.body
  const newTodo = new Todo({
    userId,
    description: todo
  })
  newTodo
    .save()
    .then(doc => {
      res.status(201).json({ todo: doc })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

// new user
app.post('/newuser', async (req, res) => {
  const { username, password } = req.body;

  const userExist = await User.find({ username }).then(res => res.length)

  if (!userExist) {
    const user = new User({ username, password })
    user
      .save()
      .then(doc => {
        res.status(200).json({ user: doc })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  } else {
    res.status(203).json({ message: 'User already exist' })
  }
})

// login 
app.post('/login', (req, res) => {
  console.assert('connected')
  const { username, password } = req.body;
  User.find({ username, password })
    .then(doc => {
      if(doc.length) {
        const token = jwt.sign( { _id: doc[0]._id }, key );

        res.status(200).json({ user: { _id: doc[0]._id }, token: token })
      } else {
        res.status(203).json({ user: doc, message: 'Wrong username or password' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

app.put('/todos/edit', (req, res) => {
  const { id, description } = req.body;
  Todo.findByIdAndUpdate(id, { description })
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

app.patch('/todos/complete/:id', (req, res) => {
  const { id } = req.params

  Todo.findByIdAndUpdate(id, { completed: true })
    .then(doc => {
      res.status(200).json({ todo: doc })
    })
    .catch(err => {
      res.status(500).json({ message: err })
    })
})

app.delete('/todos/:id', (req, res) => {
  const { id, nextTodo } = req.params

  Todo.findByIdAndRemove(id)
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
