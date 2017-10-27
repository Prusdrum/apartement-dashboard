const configureTramRoute = require('../modules/tram/index');

const configureExpressApp = (app, db, config) => {
    configureTramRoute(app);
};

module.exports = configureExpressApp;