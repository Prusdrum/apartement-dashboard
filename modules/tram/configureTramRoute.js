const getTrams = require('./tramsController').getTrams;

const configureRoute = (app) => {
    app.get('/trams', (req, res, next) => {
        const {lineNumber, direction, stop} = req.query;

        getTrams(lineNumber, direction, stop).then(trams => {
            res.json(trams);
        }).catch(error => {
            res.json(error);
        });
    });
}

module.exports = configureRoute;