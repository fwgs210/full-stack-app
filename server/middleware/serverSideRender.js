/* eslint-disable global-require,no-console */
const express = require('express');
const path = require('path');
const compression = require('compression');
const http = require('http');
const enforce = require('express-sslify');
const { PORT } = require('../config/serverSetup')


// Production middlewares
const addProdMiddlewares = (app, options) => {
    const publicPath = options.publicPath || '/';
    const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');
    // compression middleware compresses your server responses which makes them
    // smaller (applies also to assets). You can read more about that technique
    // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression());
    app.use(publicPath, express.static(outputPath));
    app.use(enforce.HTTPS({ trustProtoHeader: true })) // set trustProtoHeader TRUE for heroku
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // allow self assigned SSL

    app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
    app.get('*', (req, res) => res.render('index.ejs'));
    
    /* for the normal http server */
    return http.createServer(app).listen(PORT, 'localhost', () => console.log('Express server listening on port ' + PORT));
};

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
    addProdMiddlewares(app, options);
    // const isDev = process.env.NODE_ENV === 'development';
    // if (!isDev) {
    //     addProdMiddlewares(app, options);
    // } else {
    //     const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    //     addDevMiddlewares(app, webpackConfig, options.config);
    //     app.listen(PORT);
    // }
    // return app;
};
