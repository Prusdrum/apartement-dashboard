const path = require('path');

const configureTramRoute = require('../modules/tram/index');
const configureDefaultRoutes = require('../modules/default/index');

const configureExpressApp = (app, db, config) => {
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'ejs');

    configureDefaultRoutes(app);
    configureTramRoute(app);
};

module.exports = configureExpressApp;