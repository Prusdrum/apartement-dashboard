const express = require('express');
const app = express();

const configureTramRoute = require('./modules/tram/index');

configureTramRoute(app);

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;