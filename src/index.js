const express = require('express');
const app = express();
const config = require('./config/server-config');

const configureTramRoute = require('./modules/tram/index');

configureTramRoute(app);

app.listen(config.PORT);
console.log(`Magic happens on port ${config.PORT}`);
exports = module.exports = app;