const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = 8080

const Todo = require('./models/todo')
const User = require('./models/user')
const uri = 'mongodb://localhost/todoApp'

mongoose.connect(uri)
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  Todo.find({ userId: req.body.userId})
    .then(docs => {
      console.log(docs)
      res.status(200).send({ todos: docs })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
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
  const { username, password } = req.body;
  User.find({ username, password })
    .then(doc => {
      if(doc.length) {
        res.status(200).json({ user: doc })
      } else {
        res.status(203).json({ user: doc, message: 'User not found' })
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
})
