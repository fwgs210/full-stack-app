const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const enforce = require('express-sslify');
const next = require('next')
const nextApp = next({ dev: process.env.NODE_DEV !== 'production' })
const handle = nextApp.getRequestHandler() //part of next config

const { uri, PORT } = require('./config/serverSetup')
const initAdminUser = require('./utils/initAdminUser')

mongoose.connect(uri, { useNewUrlParser: true })
// const env = app.get('env');

nextApp.prepare().then(() => {
  // express code here
  const app = express()
  
  if (process.env.NODE_DEV === 'production') { // PROD setup
    initAdminUser()

    app.use(enforce.HTTPS({ trustProtoHeader: true })) // set trustProtoHeader TRUE for heroku
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // allow self assigned SSL
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', require('./routes'))

  app.get('/admin/:id', (req, res) => {
    nextApp.render(req, res, '/admin')
  })

  app.get('/user/:id', (req, res) => {
    nextApp.render(req, res, '/user')
  })

  app.get('/comment-board/:id', (req, res) => {
    nextApp.render(req, res, '/comment-board')
  })

  app.get('/chatroom/:id', (req, res) => {
    nextApp.render(req, res, '/chatroom')
  })

  app.get('/reset-password/:token', (req, res) => {
    nextApp.render(req, res, '/reset-password', { token: req.params.token } )
  })

  app.get('*', (req, res) => {
    return handle(req, res) // for all the react stuff
  })

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`✅  Server is up and running on port ${PORT}.`)
  })
})
