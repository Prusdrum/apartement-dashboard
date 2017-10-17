const fs = require('fs');
const promisify = require('util').promisify;

const express = require('express');
const app = express();

const tramRoute = require('./modules/transport/tramsRoute');

app.get('/trams', tramRoute);

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;