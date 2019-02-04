import mongoose from 'mongoose'
import http from 'http';
import enforce from 'express-sslify';
import initAdminUser from './server/utils/initAdminUser'
import { uri, PORT } from './server/config/serverSetup'

mongoose.connect(uri, { useNewUrlParser: true })
let app = require('./server').default;
let currentApp = app;
const env = app.get('env');
const server = http.createServer(app);

server.listen(process.env.PORT || PORT, error => {
  if (error) {
    console.log(error);
  }

  if (env === 'production') { // PROD setup
    initAdminUser()
    app.use(enforce.HTTPS({ trustProtoHeader: true })) // set trustProtoHeader TRUE for heroku
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // allow self assigned SSL
  }

  console.log(`Server listening on port ${PORT}.`)
  console.log(env)
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}

