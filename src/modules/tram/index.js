const getTrams = require('./trams-controller').getTrams;

const configureRoute = (app) => {
    app.get('/trams/:lineNumber/:direction/:stop', (req, res, next) => {
        const {lineNumber, direction, stop} = req.params;

        getTrams(lineNumber, direction, stop).then(trams => {
            res.json(trams);
        }).catch(error => {
            res.json(error);
        });
    });
}

module.exports = configureRoute;