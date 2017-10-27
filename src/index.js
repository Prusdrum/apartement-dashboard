const express = require('express');
const app = express();
const config = require('./config/server-config');

const configureExpressApp = require('./server/configure-express-app');
const configureDb = require('./server/configure-db');

configureDb(config).then(db => {
    configureExpressApp(app, db, config);
    app.listen(config.PORT);
    console.log(`Magic happens on port ${config.PORT}`);
});

exports = module.exports = app;