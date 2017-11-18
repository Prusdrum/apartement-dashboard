const getTrams = require('./trams-controller/trams-controller').getTrams;

const setupModule = (options, imports, register) => {
    const {webserver} = imports;
    const app = webserver.getApp();

    app.get('/api/trams/:lineNumber/:direction/:stop', (req, res, next) => {
        const {lineNumber, direction, stop} = req.params;
        
        getTrams(lineNumber, direction, stop).then(trams => {
            res.json(trams);
        }).catch(error => {
            res.json(error);
        });
    });

    register(null, {});
};

module.exports = setupModule;