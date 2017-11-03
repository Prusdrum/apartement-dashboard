const path = require('path');
const bodyParser = require('body-parser');

const routesConfigurations = [
    require('../modules/tram/index'),
    require('../modules/default/index'),
    require('../modules/inventory/index')
];


const configureExpressApp = (app, db, config) => {
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'ejs');

    app.use(bodyParser.json());

    routesConfigurations.forEach(configureRoute => {
        configureRoute(app, db);
    });
};

module.exports = configureExpressApp;