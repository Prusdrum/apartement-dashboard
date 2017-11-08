const path = require('path');
const bodyParser = require('body-parser');
const expressReactViews = require('express-react-views');
const express = require('express');

const routesConfigurations = [
    require('../modules/tram/index'),
    require('../modules/default/index'),
    require('../modules/inventory/index')
];


const configureExpressApp = (app, db, config) => {
    app.set('views', path.join(__dirname, '..', 'pages'));
    app.set('view engine', 'jsx');
    app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'public')));
    app.engine('jsx', expressReactViews.createEngine());

    app.use(bodyParser.json());

    routesConfigurations.forEach(configureRoute => {
        configureRoute(app, db);
    });
};

module.exports = configureExpressApp;