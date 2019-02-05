const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const enforce = require('express-sslify');
const next = require('next')
const nextApp = next({ dev: process.env.NODE_DEV !== 'production' })
const handle = nextApp.getRequestHandler(nextApp) //part of next config

const { uri, PORT } = require('./config/serverSetup')
const initAdminUser = require('./utils/initAdminUser')

mongoose.connect(uri, { useNewUrlParser: true })
// const env = app.get('env');

nextApp.prepare().then(() => {
  // express code here
  const app = express()
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', require('./routes'))

  app.get('/admin/:id', (req, res) => {
    const actualPage = '/admin'
    // const queryParams = { userId: req.params.id }
    app.render(req, res, actualPage)
  })

  app.get('/user/:id', (req, res) => {
    const actualPage = '/user'
    // const queryParams = { userId: req.params.id }
    app.render(req, res, actualPage)
  })

  app.get('*', (req, res) => {
    return handle(req, res) // for all the react stuff
  })

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT}.`)
  })
})


// if (env === 'production') { // PROD setup
//   initAdminUser()

//   app.use(enforce.HTTPS({ trustProtoHeader: true })) // set trustProtoHeader TRUE for heroku

//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // allow self assigned SSL

//   http.createServer(app).listen(PORT, function () {
//     console.log('Express server listening on port ' + PORT);
//   });

// }

// if (env === 'development') { // DEV setup
//   http.createServer(app).listen(PORT, function () {
//     console.log(`Server listening on port ${PORT}.`)
//     console.log(env)
//   });
// }
